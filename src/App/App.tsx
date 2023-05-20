import { BrowserRouter, Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { Fragment, useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import Login from "../pages/Public/Login/Login";
import Home from "../pages/Private/Home/Home";
import { getAllProductItems } from "../firebase/firebaseFunction";
import { ProdictCurrentI, ProdictI } from "../interfaces/data";
import {
  changeFilteredProducts,
  changeFilteredProductsCurrent,
  fetchFullProducts,
} from "../store/slices/isProductsSlice";

const App = () => {
  const { isAuth } = useAppSelector((state) => state.isAuthSlice);

  const { filteredId, fullProducts, filteredProducts } = useAppSelector(
    (state) => ({
      filteredId: state.isProductsSlice.filteredId,
      filteredProducts: state.isProductsSlice.filteredProducts,
      fullProducts: state.isProductsSlice.fullProducts,
    })
  );

  const dispatch = useAppDispatch();

  const fetchData = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const createProduct = () => {
    const filteredProductsCurrent: ProdictCurrentI[] = [];
    const sorted = [...filteredProducts];
    sorted
      .sort((a: ProdictI, b: ProdictI) => a.model.localeCompare(b.model))
      .forEach((el) => {
        if (filteredProductsCurrent.find((item) => item.model === el.model)) {
          const index = filteredProductsCurrent.findIndex(
            (item) => item.model === el.model
          );
          filteredProductsCurrent[index].imageURl.push(el.imageURl);
          filteredProductsCurrent[index].colorId.push(el.colorId);
        } else {
          filteredProductsCurrent.push({
            ...el,
            imageURl: [el.imageURl],
            colorId: [el.colorId],
          });
        }
      });
    const qtFilteredProductsCurrent = filteredProductsCurrent.map((el) => {
      return { ...el, qt: 0 };
    });
    dispatch(changeFilteredProductsCurrent(qtFilteredProductsCurrent));
  };

  useEffect(() => {
    const filteredProducts = fullProducts.filter(
      (el) => el.brandID === filteredId
    );
    dispatch(changeFilteredProducts(filteredProducts));
  }, [filteredId, fullProducts]);

  useEffect(() => {
    createProduct();
  }, [filteredId, filteredProducts]);

  return (
    <BrowserRouter>
      <Routes>
        {isAuth
          ? privateRoutes.map((route) => (
              <Fragment key={route.path}>
                <Route
                  path={route.path}
                  element={<route.component></route.component>}></Route>
                <Route
                  path="*"
                  element={<Home />}></Route>
              </Fragment>
            ))
          : publicRoutes.map((route) => (
              <Fragment key={route.path}>
                <Route
                  path={route.path}
                  element={<route.component></route.component>}></Route>
                <Route
                  path="*"
                  element={<Login />}></Route>
              </Fragment>
            ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
