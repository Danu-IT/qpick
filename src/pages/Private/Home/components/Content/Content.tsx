import styled from "styled-components";
import { categoryData } from "../../../../../utils/data";
import Category from "../Category/Category";

const Content = ({}) => {
  return (
    <Container>
      {categoryData.map((el) => (
        <Category
          title={el.label}
          id={el.id}></Category>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default Content;
