import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import styled from "styled-components";

type Props = {};

const Basket = (props: Props) => {
  return (
    <Container>
      <Header></Header>
      <Footer></Footer>
    </Container>
  );
};

export const Container = styled.div``;

export default Basket;
