import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/redux";
import { colorData } from "../../../../../utils/data";
import { changeColorIndex } from "../../../../../store/slices/isProductsSlice";
import { FC } from "react";

interface ColorPickProps {
  index: number;
  item: number;
}

const ColorPick: FC<ColorPickProps> = ({ index, item }) => {
  const dispath = useAppDispatch();
  const colorIndex = useAppSelector(
    (state) => state.isProductsSlice.colorIndex
  );
  const color = colorData.filter((el) => el.id === item)[0];

  const handlerColor = () => {
    dispath(changeColorIndex(index));
  };

  return (
    <Item
      indexCurrent={colorIndex}
      index={index}
      onClick={handlerColor}
      bg={color.value}></Item>
  );
};

interface ItemPropsStyle {
  bg: string;
  index: number;
  indexCurrent: number;
}

export const Item = styled.div<ItemPropsStyle>`
  background-color: ${({ bg }) => bg};
  border: ${({ index, indexCurrent }) =>
    index === indexCurrent ? `1px solid yellow` : ""};
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export default ColorPick;
