import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/redux";
import { useMemo } from "react";
import Button from "../../../../../components/UI/Button/Button";
import ColorsPick from "../ColorsPick/ColorsPick";
import {
  AiFillStar,
  AiOutlineQuestionCircle,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { GrFormView } from "react-icons/gr";
import { changeBasketItem } from "../../../../../store/slices/isSaveSlice";

const Content = () => {
  const productId = useParams().id;
  const dispatch = useAppDispatch();

  const basket = useAppSelector((state) => state.isSaveSlice.basket);

  const { filteredProductsCurrent, colorIndex } = useAppSelector((state) => ({
    colorIndex: state.isProductsSlice.colorIndex,
    filteredProductsCurrent: state.isProductsSlice.filteredProductsCurrent,
  }));

  const currentItem = useMemo(
    () => filteredProductsCurrent.filter((el, i) => el.id === productId)[0],
    [productId]
  );

  const handlerBasket = () => {
    dispatch(changeBasketItem(currentItem));
    isBasketItem();
  };

  const isBasketItem = () => {
    const isSaveItemInBasket = basket.filter((el) => el.id === currentItem.id);
    return isSaveItemInBasket.length ? true : false;
  };

  console.log(basket);

  return (
    <Container>
      <InfoProduct>
        <Image src={currentItem.imageURl[colorIndex]}></Image>
        <Right>
          <Title>{currentItem.model}</Title>
          <Info>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt et dolore
          </Info>
          <Total>
            {[0, 0, 0, 0, 0].map((el) => (
              <AiFillStar
                color="#FD7E14
            "></AiFillStar>
            ))}
            <Review>23 Reviews</Review>
          </Total>
          <Price>{currentItem.price} ₽</Price>
          <Views>
            <GrFormView></GrFormView>
            32 people are looking at this product
          </Views>
          <Line></Line>
          <>Color:</>
          <ColorsPick listId={currentItem.colorId}></ColorsPick>
          <Btns>
            <Button>Нравится!</Button>
            <Button onClick={handlerBasket}>
              {isBasketItem() ? "Убрать из корзины" : "Добавить в корзину"}
            </Button>
          </Btns>
          <Tags>
            <Ask>
              <AiOutlineQuestionCircle></AiOutlineQuestionCircle>
              Ask question
            </Ask>
            <Ask>
              <AiOutlineShareAlt></AiOutlineShareAlt>
              Share
            </Ask>
          </Tags>
          <Line></Line>
        </Right>
      </InfoProduct>
    </Container>
  );
};

export const Container = styled.div`
  flex: 1 0 auto;
  margin-top: 50px;
`;

export const InfoProduct = styled.div`
  display: flex;
  gap: 50px;
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const Image = styled.img`
  width: 470px;
  padding: 10px;
  height: 460px;
  object-fit: contain;
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;
  background-color: white;
`;
export const Title = styled.div`
  font-weight: 500;
  font-size: 34px;
  line-height: 38px;
`;
export const Info = styled.div``;
export const Btns = styled.div`
  display: flex;
  gap: 20px;
`;
export const Line = styled.div`
  border: 1px solid #f5f5f5;
`;
export const Price = styled.div`
  font-weight: 600;
  font-size: 26px;
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
`;

export const Review = styled.div`
  margin-left: 10px;
`;

export const Views = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Tags = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 15px;
`;
export const Ask = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default Content;
