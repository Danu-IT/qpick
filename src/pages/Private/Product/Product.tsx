import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Content from "./components/Content/Content";
import styled from "styled-components";
import Back from "../../../components/Back/Back";

const Product = () => {
  return (
    <Container>
      <Back></Back>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </Container>
  );
};

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default Product;
