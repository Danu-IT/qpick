import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import styled from "styled-components";
import Content from "./components/Content/Content";

type Props = {};

const Basket = () => {
  return (
    <Container>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default Basket;
