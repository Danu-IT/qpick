import { useState, SetStateAction } from "react";
import Input from "../../../../../components/UI/Input/Input";
import { TbBrandApple } from "react-icons/tb";
import { OptionType } from "../../../../../interfaces";
import { brandData, categoryData, colorData } from "../../../../../utils/data";
import Select, { ActionMeta, SingleValue } from "react-select";
import styled from "styled-components";
import { VscSymbolNamespace } from "react-icons/vsc";
import DownloadImg from "../../../../../components/DownloadImg/DownloadImg";
type Props = {};

const Content = (props: Props) => {
  const [brand, setBrand] = useState<OptionType>();
  const [category, setCategory] = useState<OptionType>();
  const [color, setColor] = useState<OptionType>();
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);

  const selectChangeBrand = (newValue: any) => setBrand(newValue);
  const selectChangeCategory = (newValue: any) => setCategory(newValue);
  const selectChangeColor = (newValue: any) => setColor(newValue);

  return (
    <Container>
      <BrandSelect
        value={brand}
        onChange={selectChangeBrand}
        options={brandData}
        placeholder="Выберите бренд"
      />
      <BrandSelect
        value={category}
        onChange={selectChangeCategory}
        options={categoryData}
        placeholder="Выберите категорию"
      />
      <BrandSelect
        value={color}
        onChange={selectChangeColor}
        options={colorData}
        placeholder="Выберите цвет"
      />
      <Input
        value={model}
        onChange={setModel}
        Icon={VscSymbolNamespace}
        placeholder="Напишите модель предмета"
        type="login"></Input>

      <DownloadImg></DownloadImg>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  background: white;
  width: 350px;
  margin: 0 auto;
  border-radius: 20px;
  padding: 10px;
  border: 1px solid gray;
`;
export const BrandSelect = styled(Select)`
  width: 300px;
`;
export default Content;
