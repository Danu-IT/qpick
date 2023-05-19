import { FC, useEffect } from "react";
import { OptionType } from "../../../../../interfaces";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/redux";
import { changeFilteredId } from "../../../../../store/slices/isProductsSlice";

interface FilterListProps {
  content?: OptionType[];
}

const FilterList: FC<FilterListProps> = ({ content }) => {
  const dispatch = useAppDispatch();

  const filteredId = useAppSelector(
    (state) => state.isProductsSlice.filteredId
  );

  const handlerFilter = (id: number) => {
    dispatch(changeFilteredId(id));
  };

  return (
    <Container>
      {content?.map((el) => (
        <Item
          checked={filteredId === el.id ? true : false}
          onClick={() => handlerFilter(el.id)}
          key={el.id}>
          {el.value}
        </Item>
      ))}
    </Container>
  );
};

export interface FilterStyleProps {
  checked: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  width: 155px;
  gap: 10px;
  font-size: 20px;
`;

const Item = styled.div<FilterStyleProps>`
  color: ${({ checked }) => (checked ? "#FFA542" : "")};
`;

export default FilterList;
