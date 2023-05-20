import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0);
  position: relative;
  width: 300px;
  border-radius: 67px;
`;

export const IconCustom = styled.div`
  position: absolute;
  top: 17px;
  left: 20px;
  color: #212529;
  opacity: 0.4;
`;

export const InputTag = styled.input`
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 25px 0px 25px 60px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: 67px;
  &::placeholder {
    color: #212529;
    opacity: 0.4;
  }
  &:focus {
    outline: none;
    border: 1px solid #bdbdbd;
  }
`;
export const IconVisible = styled.div`
  position: absolute;
  top: 17px;
  left: 260px;
  cursor: pointer;
`;