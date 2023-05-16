import styled from "styled-components";
import { FC } from "react";
import { Container } from "./style";

interface ButtonProps {
  children: React.ReactNode;
  width?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, width, onClick }) => {
  return (
    <Container
      onClick={onClick}
      w={width}>
      {children}
    </Container>
  );
};

export default Button;
