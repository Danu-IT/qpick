import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 40px;
  & > * {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  color: rgba(0, 0, 0, 0.4);
`;

export const Login = styled.div`
  text-align: center;
  & > span {
    color: blue;
    cursor: pointer;
  }
`;