import styled from "styled-components";
import { categoryData } from "../../../../../utils/data";
import Category from "../Category/Category";
import image from "../../../../../assets/images/iPhone-13-Pro-Max-silver-1000x1000 1.png";

const Content = ({}) => {
  return (
    <Container>
      <Advertising>
        <Text>Аксессуары для Iphone 13 Pro Max</Text>
        <Image
          src={image}
          alt=""
        />
      </Advertising>
      {categoryData.map((el) => (
        <Category
          key={el.id}
          title={el.label}
          id={el.id}></Category>
      ))}
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  gap: 30px;
`;

export const Advertising = styled.div`
  background: #101010;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  height: 197px;
  margin: 22px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  color: white;
  font-weight: 600;
  font-size: 30px;
  width: 300px;
`;

export const Image = styled.img`
  width: 321px;
  height: 226px;
  margin-bottom: 4px;
  object-fit: cover;
`;

export default Content;
