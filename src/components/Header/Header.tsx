import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useMemo, useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { changeAuth, changeUid } from "../../store/slices/isAuthSlice";
import { sliceEmail } from "../../utils";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import DropDown from "../UI/DropDown/DropDown";
import { motion } from "framer-motion";
import { CiLogin } from "react-icons/ci";
import {
  Basket,
  Container,
  Count,
  Icon,
  Image,
  Item,
  Left,
  Like,
  List,
  Name,
  Right,
  User,
} from "./style";
import { brandData } from "../../utils/data";

const Header = ({}) => {
  const [isVisibleContentDropdown, setisVisibleContentDropdown] =
    useState(true);
  const [isInfoUser, setIsInfoUser] = useState(true);

  const auth: Auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentUser, basket } = useAppSelector((state) => ({
    currentUser: state.isAuthSlice.user,
    basket: state.isSaveSlice.basket,
  }));

  const name = useMemo(
    () =>
      !currentUser?.displayName
        ? sliceEmail(currentUser?.email)
        : currentUser?.displayName,
    [currentUser?.email]
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) dispatch(changeUid(user));
    });
  }, []);

  const visibleContentDropdown = () => {
    setisVisibleContentDropdown((prev) => !prev);
  };

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch(changeAuth(false));
      navigate("/");
    } catch (e: any) {
    } finally {
    }
  };

  return (
    <Container>
      <Left>
        <User>
          <Icon
            onClick={() => setIsInfoUser((prev) => !prev)}
            as={motion.div}
            whileTap={{ scale: 0.6 }}>
            {currentUser.photoURL ? (
              <Image src={currentUser.photoURL}></Image>
            ) : (
              <FaRegUserCircle size={30}></FaRegUserCircle>
            )}
          </Icon>
          <List view={isInfoUser}>
            {currentUser.email === "donusuzerain@ya.ru" && (
              <Item onClick={() => navigate("/newitem")}>New item +</Item>
            )}
            <Item onClick={logout}>
              logout <CiLogin></CiLogin>
            </Item>
          </List>
          <Name>{name}</Name>
        </User>
        <DropDown
          content={brandData}
          onClick={visibleContentDropdown}
          visible={isVisibleContentDropdown}></DropDown>
      </Left>
      <Right>
        <Like>
          <AiOutlineHeart size={25}></AiOutlineHeart>
          <Count>3</Count>
        </Like>
        <Basket>
          <SlBasket size={25}></SlBasket>
          <Count>{basket.length === 0 ? "" : basket.length}</Count>
        </Basket>
      </Right>
    </Container>
  );
};

export default Header;
