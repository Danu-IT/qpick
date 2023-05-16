import { useState, SetStateAction } from "react";
import Input from "../../../../../components/UI/Input/Input";
import { OptionType } from "../../../../../interfaces";
import { brandData, categoryData, colorData } from "../../../../../utils/data";
import Select from "react-select";
import styled from "styled-components";
import { VscSymbolNamespace } from "react-icons/vsc";
import DownloadImg from "../../../../../components/DownloadImg/DownloadImg";
import Loader from "../../../../../components/Loader/Loader";
import Button from "../../../../../components/UI/Button/Button";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../../../../firebase/config";
import { IoMdPricetag } from "react-icons/io";
import { ProdictI } from "../../../../../interfaces/data";
import { saveItem } from "../../../../../firebase/firebaseFunction";

const Content = ({}) => {
  const [brand, setBrand] = useState<OptionType>();
  const [category, setCategory] = useState<OptionType>();
  const [color, setColor] = useState<OptionType>();
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");

  const [field, setField] = useState(false);
  const [isLoadingImg, setIsLoadingImg] = useState(false);
  const [messageImage, setMessageImage] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const clearData = () => {
    setBrand(undefined);
    setCategory(undefined);
    setColor(undefined);
    setModel("");
    setPrice("");
    setImage("");
  };

  const selectChangeBrand = (newValue: any) => setBrand(newValue);
  const selectChangeCategory = (newValue: any) => setCategory(newValue);
  const selectChangeColor = (newValue: any) => setColor(newValue);

  const uploadImage = async (e: any) => {
    setIsLoadingImg(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (e) => {
        setField(false);
        setMessageImage(
          `Ошибка - изображение не закачено. Попробуйте еще раз 👎🏻`
        );
        setTimeout(() => {
          setIsLoadingImg(false);
        }, 3000);
      },
      async () => {
        const res = await getDownloadURL(uploadTask.snapshot.ref);
        setField(true);
        setMessageImage(`Изображение успешно загружено 👍`);
        setImage(res);
        setIsLoadingImg(false);
        setTimeout(() => {
          setMessageImage("");
        }, 3000);
      }
    );
  };

  const deleteImage = async () => {
    setIsLoadingImg(true);
    if (!image) return false;
    const deleteRef = ref(storage, image);
    await deleteObject(deleteRef);
    try {
      setImage(null);
      setIsLoadingImg(false);
      setField(true);
      setMessageImage("Изображение успешно удалено 👍");
      setTimeout(() => {
        setMessageImage("");
      }, 3000);
    } catch (err: any) {
      setIsLoadingImg(false);
      setField(false);
      setMessageImage("Изображение не удалено");
    }
  };

  const saveDetails = async () => {
    try {
      if (!brand || !category || !color || !model || !price || !image) {
        setField(true);
        setMessageImage("Какое-то из полей не заполнено");
        setTimeout(() => {
          setMessageImage("");
        }, 3000);
      } else {
        const data: ProdictI = {
          id: `${Date.now()}`,
          model: model,
          categoryID: category.id,
          brandID: brand.id,
          imageURl: image,
          colorId: color.id,
          price: price,
        };
        saveItem(data);
        setMessageImage("Все данные загружены");
        clearData();
        setTimeout(() => {
          setMessageImage("");
        }, 3000);
      }
    } catch (e: any) {}
  };

  return (
    <Container>
      <ContainerContent>
        <Selects>
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
          <Input
            value={price}
            onChange={setPrice}
            Icon={IoMdPricetag}
            placeholder="Напишите цену предмета"
            type="login"></Input>
        </Selects>
        <div>
          <Message
            view={messageImage}
            bg={field}>
            {messageImage}
          </Message>
          <DownloadImg
            uploadImage={uploadImage}
            deleteImage={deleteImage}
            image={image}
            isLoading={isLoadingImg}></DownloadImg>
        </div>
      </ContainerContent>
      <Button
        onClick={saveDetails}
        width="30%">
        Save
      </Button>
    </Container>
  );
};

interface ContentStyleProps {
  bg: boolean;
  view: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  border-radius: 20px;
  padding: 10px;
  margin-top: 80px;
`;

export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  position: relative;
`;

export const Selects = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  gap: 20px;
`;

export const BrandSelect = styled(Select)`
  width: 300px;
`;

export const Message = styled.div<ContentStyleProps>`
  position: absolute;
  top: -20px;
  right: 0px;
  height: 40px;
  border-radius: 20px;
  padding: 10px;
  color: white;
  opacity: ${({ view }) => (view ? "1" : "0")};
  background: ${({ bg }) => (bg ? "green" : "red")};
  transition: opacity 0.5s;
`;

export default Content;
