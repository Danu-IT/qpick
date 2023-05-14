import styled from "styled-components";
import { FC, useState } from "react";
import { IconType } from "react-icons";
import { IoEyeSharp } from "react-icons/io5";
import { HiEyeSlash } from "react-icons/hi2";
import { Container, IconCustom, IconVisible, InputTag } from "./style";
interface InputProps {
  value: string;
  onChange: (str: string) => void;
  placeholder: string;
  Icon: IconType;
  type: string;
}

const Input: FC<InputProps> = ({
  placeholder,
  Icon,
  onChange,
  value,
  type,
}) => {
  const [visible, setVisible] = useState(true);
  return (
    <Container>
      <IconCustom>
        <Icon></Icon>
      </IconCustom>
      <InputTag
        type={visible ? type : "login"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}></InputTag>
      {type === "password" && (
        <IconVisible onClick={() => setVisible((prev) => !prev)}>
          {visible ? <HiEyeSlash></HiEyeSlash> : <IoEyeSharp></IoEyeSharp>}
        </IconVisible>
      )}
    </Container>
  );
};

export default Input;
