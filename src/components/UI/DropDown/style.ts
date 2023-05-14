import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

interface DropDownStyleProps {
    visible: boolean;
}

export const Container = styled.div`
  cursor: pointer;
  position: relative;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Arrow = styled(IoIosArrowDown)<DropDownStyleProps>`
  transform: ${({ visible }) => (visible ? "rotate(180deg)" : "0")};
  transition: transform 0.5s;
`;

export const Content = styled.div<DropDownStyleProps>`
  background: #eaeaea;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 30px 30px;
  position: absolute;
  top: 30px;
  left: 0;
  visibility: ${({ visible }) => (visible ? 'hidden' : 'visible')};
  opacity: ${({ visible }) => (visible ? '0': '1')};
  transition: all 0.5s;
`;
