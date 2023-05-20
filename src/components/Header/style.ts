import styled from "styled-components";

export interface HeaderStyleProps {
    view: boolean;
}

export const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 100;
  padding: 10px 0;
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 75px;
`;
export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
`;
export const Image = styled.img`
  width: 40px;
  height: 40px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
export const Name = styled.div``;
export const PickPhone = styled.div``;
export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
  color: #838383;
`;
export const Count = styled.div`
  position: absolute;
  top: -10px;
  right: -13px;
  color: #ffffff;
  background-color: #ffa542;
  border-radius: 50%;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Like = styled.div`
  position: relative;
`;
export const Basket = styled.div`
  position: relative;
`;
export const Icon = styled.div``;
export const List = styled.ul<HeaderStyleProps>`
  position: absolute;
  top: 50px;
  visibility: ${({ view }) => (view ? 'hidden' : 'visible')};
  opacity: ${({ view }) => (view ? '0': '1')};
  transition: all 0.5s;
  background: #eaeaea;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  width: 120px;
  border-radius: 10px;
  & > :first-child {
    border-radius: 10px 10px 0px 0 !important;
  }
`;
export const Item = styled.li`
  list-style-type: none;
  padding: 10px 10px 10px 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    background: #fffff0;
    cursor: pointer;
    border-radius: 0 0 10px 10px;
  }
`;