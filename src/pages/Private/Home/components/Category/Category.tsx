import { FC, useMemo } from "react";
import { useAppSelector } from "../../../../../hooks/redux";
import ItemProduct from "../../../../../components/ItemProduct/ItemProduct";
import styled from "styled-components";

interface CategoryProps {
  id: number;
  title: string;
}

const Category: FC<CategoryProps> = ({ id, title }) => {
  const { filteredId, filteredProductsCurrent } = useAppSelector((state) => ({
    filteredId: state.isProductsSlice.filteredId,
    filteredProductsCurrent: state.isProductsSlice.filteredProductsCurrent,
  }));

  const categoryItems = useMemo(
    () => filteredProductsCurrent.filter((el) => el.categoryID === id),
    [id, filteredProductsCurrent, filteredId]
  );

  return (
    <div>
      <Title>{title}</Title>
      <List>
        {categoryItems.map((el) => (
          <ItemProduct
            item={el}
            key={el.id}></ItemProduct>
        ))}
      </List>
    </div>
  );
};

export const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #838383;
  margin-bottom: 20px;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export default Category;
