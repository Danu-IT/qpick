import styled from "styled-components";
import Header from "../../../components/Header/Header";
import Back from "../../../components/Back/Back";
import Content from "./components/Content/Content";

const Admin = ({}) => {
  return (
    <Container>
      <Back></Back>
      <Header></Header>
      <Content></Content>
    </Container>
  );
};

export const Container = styled.div`
  position: relative;
`;

export default Admin;
