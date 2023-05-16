import Header from "../../../components/Header/Header";
import { useEffect } from "react";
import { getAllProductItems } from "../../../firebase/firebaseFunction";
import { ProdictI } from "../../../interfaces/data";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  changeFilteredProducts,
  fetchFullProducts,
} from "../../../store/slices/isProductsSlice";
import styled from "styled-components";
import Content from "./components/Content/Content";

const Home = ({}) => {
  const { filteredId, fullProducts } = useAppSelector((state) => ({
    filteredId: state.isProductsSlice.filteredId,
    fullProducts: state.isProductsSlice.fullProducts,
  }));

  const dispatch = useAppDispatch();

  const fetchData = async () => {
    const response = await getAllProductItems();
    const fullProducts: ProdictI[] = response.map((item) => {
      return {
        id: item.data().id,
        brandID: item.data().brandID,
        categoryID: item.data().categoryID,
        colorId: item.data().colorId,
        imageURl: item.data().imageURl,
        model: item.data().model,
        price: item.data().price,
      };
    });
    dispatch(fetchFullProducts(fullProducts));
  };

  useEffect(() => {
    const filteredProducts = fullProducts.filter(
      (el) => el.brandID === filteredId
    );
    console.log(filteredProducts);
    dispatch(changeFilteredProducts(filteredProducts));
  }, [filteredId]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header></Header>
      <Content></Content>
    </div>
  );
};

export default Home;
