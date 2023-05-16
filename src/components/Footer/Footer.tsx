import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { navigateList } from "../../routes";
import { MdLanguage } from "react-icons/md";
import { langData } from "../../utils/data";
import { SlSocialVkontakte } from "react-icons/sl";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  return (
    <Container>
      <Logo>QPICK</Logo>
      <Navigate>
        {navigateList.map((el) => (
          <ItemNavigate
            pick={el.path === location ? true : false}
            onClick={() => navigate(el.path)}>
            {el.name}
          </ItemNavigate>
        ))}
      </Navigate>
      <Сonditions>
        <СonditionsUp>Условия сервиса</СonditionsUp>
        <СonditionsDown>
          <MdLanguage></MdLanguage>
          <Lang>
            {langData.map((el) => (
              <LangItem pick={el.value == "Рус" ? true : false}>
                {el.value}
              </LangItem>
            ))}
          </Lang>
        </СonditionsDown>
      </Сonditions>
      <Social>
        <SlSocialVkontakte size={23}></SlSocialVkontakte>
        <AiOutlineInstagram size={23}></AiOutlineInstagram>
        <BsTelegram size={23}></BsTelegram>
        <AiOutlineWhatsApp size={23}></AiOutlineWhatsApp>
      </Social>
    </Container>
  );
};

export interface FooterStyleProps {
  pick: boolean;
}

export const Container = styled.div`
  margin-top: 40px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px 30px 0px 0px;
  padding: 29px;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div``;
export const Navigate = styled.div``;
export const ItemNavigate = styled.div<FooterStyleProps>`
  cursor: pointer;
  color: ${({ pick }) => (pick ? "#FFA542" : "#000000")};
`;

export const Сonditions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const СonditionsUp = styled.div``;
export const Social = styled.div`
  display: flex;
  gap: 12px;
`;
export const СonditionsDown = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const Lang = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const LangItem = styled.div<FooterStyleProps>`
  color: ${({ pick }) => (pick ? "#FFA542" : "")};
`;

export default Footer;
