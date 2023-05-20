import Header from "../../../components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "../../../components/Footer/Footer";
import styled from "styled-components";

const Home = ({}) => {
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

export default Home;
