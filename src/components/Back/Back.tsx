import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

type Props = {};

const Back = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(-1)}>
      <IoIosArrowBack color="black"></IoIosArrowBack>
    </Container>
  );
};

export default Back;
