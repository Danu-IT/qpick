import { FC } from "react";
import { BsPhone } from "react-icons/bs";
import { Arrow, Container, Content, Title } from "./style";
import FilterList from "./components/FilterList/FilterList";

interface DropDownProps {
  visible: boolean;
  onClick: () => void;
  content?: any[] | any;
}

const DropDown: FC<DropDownProps> = ({ visible, onClick, content }) => {
  return (
    <Container>
      <Title onClick={onClick}>
        <BsPhone></BsPhone>
        Выбрать бренд
        <Arrow visible={visible}></Arrow>
      </Title>
      <Content visible={visible}>
        {content ? <FilterList content={content}></FilterList> : <></>}
      </Content>
    </Container>
  );
};

export default DropDown;
