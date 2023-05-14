import { FC } from "react";
import { BsPhone } from "react-icons/bs";
import { Arrow, Container, Content, Title } from "./style";

interface DropDownProps {
  visible: boolean;
  onClick: () => void;
}

const DropDown: FC<DropDownProps> = ({ visible, onClick }) => {
  return (
    <Container>
      <Title onClick={onClick}>
        <BsPhone></BsPhone>
        Выбрать бренд
        <Arrow visible={visible}></Arrow>
      </Title>
      <Content visible={visible}>f</Content>
    </Container>
  );
};

export default DropDown;
