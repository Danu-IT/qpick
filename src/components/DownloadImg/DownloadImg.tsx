import styled from "styled-components";
import { FC } from "react";
import Loader from "../Loader/Loader";
import { ImCloudUpload } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";

interface DownloadImgProps {
  isLoading: boolean;
  image: string | null;
  uploadImage: (e: any) => void;
  deleteImage: () => void;
}

const DownloadImg: FC<DownloadImgProps> = ({
  isLoading,
  image,
  uploadImage,
  deleteImage,
}) => {
  return (
    <Container>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          {!image ? (
            <>
              <Label>
                <DivLabel>
                  <ImCloudUpload size={50}></ImCloudUpload>
                  <div>Кликни для загрзуки</div>
                </DivLabel>
                <Input
                  type="file"
                  onChange={uploadImage}
                  name="uploadimage"
                  accept="image/*"></Input>
              </Label>
            </>
          ) : (
            <>
              <IamgeContainer>
                <UploadedImage
                  src={image}
                  alt="uploaded image"></UploadedImage>
                <Button onClick={deleteImage}>
                  <AiFillDelete size={30} />
                </Button>
              </IamgeContainer>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export const Container = styled.div`
  height: 300px;
  width: 300px;
  border: 1px dotted gray;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  width: 300px;
  height: 300px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const DivLabel = styled.div`
  width: 300px;
  height: 300px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: gray;
`;

export const Input = styled.input`
  width: 0px;
  height: 0px;
`;

export const IamgeContainer = styled.div`
  position: relative;
`;

export const Button = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  color: red;
  cursor: pointer;
`;

export const UploadedImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

export default DownloadImg;
