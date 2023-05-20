import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { useState } from "react";
import Input from "../../../components/UI/Input/Input";
import { BiUser } from "react-icons/bi";
import { HiLockClosed } from "react-icons/hi";
import Button from "../../../components/UI/Button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Container, Login, Title, Form } from "./style";

const Register = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handlerRegister = async (event: any) => {
    setLoading(true);
    event.preventDefault();
    if (password !== Cpassword) {
      toast.error("Пароли не совпадают");
      setCPassword("");
      return false;
    }
    if (password.length <= 5) {
      toast.error("Пароль слишком маленький");
      setCPassword("");
      return false;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e: any) {
    } finally {
      setLoading(false);
      navigate("/");
    }
  };

  return (
    <>
      <Container>
        <Form onSubmit={handlerRegister}>
          <Title>Register</Title>
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
          <Input
            type="password"
            value={Cpassword}
            onChange={setCPassword}
            placeholder="Сonfirm password"
            Icon={HiLockClosed}></Input>
          <Button>Register</Button>
          <Login>
            Аккаунт уже существует?{" "}
            <span onClick={() => navigate("/")}>login</span>
          </Login>
        </Form>
      </Container>
      <ToastContainer />
    </>
  );
};

export default Register;
