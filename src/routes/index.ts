import { ComponentType } from "react";
import Home from "../pages/Private/Home/Home";
import Register from "../pages/Public/Register/Register";
import Login from "../pages/Public/Login/Login";
import Reset from "../pages/Public/Reset/Reset";
import NewItem from "../pages/Private/Admin/Admin";
import Basket from "../pages/Private/Basket/Basket";
import Contacts from "../pages/Private/Contacts/Contacts";
import Favorites from "../pages/Private/Favorites/Favorites";


export interface IRoute {
  path: string;
  component: ComponentType;
  type: string;
}


export enum RoutesNamesPrivate {
  HOME = "/",
  NEWITEM = "/newitem",
  BASKET = '/basket',
  FAVORITES = '/favorites',
  CONTACTS = "/contacts",
}

export enum RoutesNamesPublic {
    LOGIN = '/',
    REGISTER = "/register",
    RESET = '/reset',
}

export const navigateList = [
  {path: RoutesNamesPrivate.HOME, name: 'Домашняя'},
  {path: RoutesNamesPrivate.BASKET, name: 'Корзина'},
  {path: RoutesNamesPrivate.FAVORITES, name: 'Избранное'},
  {path: RoutesNamesPrivate.CONTACTS, name: 'Контакты'},
]

export const privateRoutes: IRoute[] = [
  { path: RoutesNamesPrivate.HOME, component: Home, type: "Home" },
  { path: RoutesNamesPrivate.NEWITEM, component: NewItem, type: "NewItem" },
  { path: RoutesNamesPrivate.BASKET, component: Basket, type: "Basket" },
  { path: RoutesNamesPrivate.CONTACTS, component: Contacts, type: "Contacts" },
  { path: RoutesNamesPrivate.FAVORITES, component: Favorites, type: "Favorites" },
];

export const publicRoutes: IRoute[] = [
  { path: RoutesNamesPublic.REGISTER, component: Register, type: "Register" },
  { path: RoutesNamesPublic.LOGIN, component: Login, type: "Login" },
  { path: RoutesNamesPublic.RESET, component: Reset, type: "Reset" },
];