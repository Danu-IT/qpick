import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 60px;
  left: -20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    opacity: 0.7;
  }
`;