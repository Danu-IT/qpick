import styled from "styled-components";
import { FC } from "react";
import { Container } from "./style";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Button;
