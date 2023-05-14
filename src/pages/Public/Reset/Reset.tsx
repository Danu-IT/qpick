import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Input from "../../../components/UI/Input/Input";
import { BiUser } from "react-icons/bi";
import Button from "../../../components/UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { Form, Container, Login, Title } from "./style";

const Reset = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handlerReset = async (event: any) => {
    event.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      navigate("/");
    } catch (e: any) {
      toast.error(e.message);
    }
  };
  return (
    <>
      <Container>
        <Form onSubmit={handlerReset}>
          <Title>Reset password</Title>
          <Input
            type="login"
            value={email}
            onChange={setEmail}
            placeholder="Email"
            Icon={BiUser}></Input>
          <Button>Reset password</Button>
          <Login>
            Стоит создать аккаунт?{" "}
            <span onClick={() => navigate("/register")}>Register</span>
          </Login>
        </Form>
      </Container>
      <ToastContainer />
    </>
  );
};

export default Reset;
