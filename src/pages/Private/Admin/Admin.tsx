import styled from "styled-components";
import Header from "../../../components/Header/Header";
import Back from "../../../components/Back/Back";
import Content from "./components/Content/Content";
import Footer from "../../../components/Footer/Footer";

const Admin = ({}) => {
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

export default Admin;
