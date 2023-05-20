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

export const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  color: rgba(0, 0, 0, 0.4);
`;

export const Register = styled.div`
  text-align: center;
  & > span {
    color: blue;
    cursor: pointer;
  }
`;

export const Sign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  & > * {
    cursor: pointer;
  }
`;

export const Reset = styled.div`
  text-align: right;
  margin-top: -15px;
  cursor: pointer;
`;