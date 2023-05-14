import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import { Form } from "../Register/style";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BiUser } from "react-icons/bi";
import { HiLockClosed } from "react-icons/hi";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useAppDispatch } from "../../../hooks/redux";
import { changeAuth } from "../../../store/slices/isAuthSlice";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Container, Register, Reset, Sign, Title } from "./style";

const Login = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const auth = getAuth();

  const dispatch = useAppDispatch();

  const handlerLogin = async (event: any) => {
    setLoading(true);
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Вход в аккаунт");
      dispatch(changeAuth(true));
    } catch (e: any) {
      toast.error("Ошибка авторизации: Логин или пароль не правильный");
    } finally {
      setLoading(false);
      navigate("/");
    }
  };

  const handlerRegisterGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      dispatch(changeAuth(true));
    } catch (e: any) {
      toast.error("Ошибка авторизации");
    } finally {
      setLoading(false);
      navigate("/");
    }
  };

  return (
    <>
      <Container>
        <Form onSubmit={handlerLogin}>
          <Title>Login</Title>
          <Input
            type="login"
            value={email}
            onChange={setEmail}
            placeholder="Email"
            Icon={BiUser}></Input>
          <Input
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="Password"
            Icon={HiLockClosed}></Input>
          <Reset onClick={() => navigate("/reset")}>Забыли пароль?</Reset>
          <Button>Login</Button>
          <Register>
            У вас нет аккаунта?{" "}
            <span onClick={() => navigate("/register")}>Register</span>
          </Register>
          <Sign>
            <FcGoogle
              onClick={handlerRegisterGoogle}
              size={20}></FcGoogle>
            <BsFacebook size={20}></BsFacebook>
          </Sign>
        </Form>
      </Container>
      <ToastContainer />
    </>
  );
};

export default Login;
