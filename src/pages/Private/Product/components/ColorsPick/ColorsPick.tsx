import { FC } from "react";
import styled from "styled-components";
import ColorPick from "../ColorPick/ColorPick";

interface ColorPickProps {
  listId: number[];
}

const ColorsPick: FC<ColorPickProps> = ({ listId }) => {
  return (
    <Container>
      {listId.map((el, i) => (
        <ColorPick
          item={el}
          index={i}></ColorPick>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 12px;
`;

export default ColorsPick;
