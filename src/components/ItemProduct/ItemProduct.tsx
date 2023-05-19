import styled from "styled-components";
import { FC } from "react";
import { ProdictCurrentI } from "../../interfaces/data";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BiRuble } from "react-icons/bi";

interface ItemProductProps {
  item: ProdictCurrentI;
}

const ItemProduct: FC<ItemProductProps> = ({ item }) => {
  return (
    <Container>
      <Like>
        <AiOutlineHeart size={20}></AiOutlineHeart>
      </Like>
      <Image src={item.imageURl[0]}></Image>
      <Center>
        <Name>{item.model}</Name>
        <Price>
          {item.price}
          <BiRuble></BiRuble>
        </Price>
      </Center>
      <Back>
        <AiFillStar color="#FFCE7F"></AiFillStar> 4.7
      </Back>
    </Container>
  );
};

export const Container = styled.div`
  width: 346px;
  height: 407.65px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 55px;
  position: relative;
`;

export const Like = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  &: hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  align-self: center;
`;

export const Center = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Name = styled.div`
  width: 200px;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  color: #1c1c27;
`;

export const Back = styled.div`
  align-self: flex-start;
  padding: 0 20px;
`;

export const Price = styled.div`
  color: #ffa542;
`;

export default ItemProduct;
