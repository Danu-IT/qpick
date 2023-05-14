import { ComponentType } from "react";
import Home from "../pages/Private/Home/Home";
import Register from "../pages/Public/Register/Register";
import Login from "../pages/Public/Login/Login";
import Reset from "../pages/Public/Reset/Reset";
import NewItem from "../pages/Private/Admin/Admin";


export interface IRoute {
  path: string;
  component: ComponentType;
  type: string;
}

export enum RoutesNamesPrivate {
  HOME = "/",
  NEWITEM = "/newitem",
}

export enum RoutesNamesPublic {
    LOGIN = '/',
    REGISTER = "/register",
    RESET = '/reset'
}

export const privateRoutes: IRoute[] = [
  { path: RoutesNamesPrivate.HOME, component: Home, type: "Home" },
  { path: RoutesNamesPrivate.NEWITEM, component: NewItem, type: "NewItem" },
];

export const publicRoutes: IRoute[] = [
  { path: RoutesNamesPublic.REGISTER, component: Register, type: "Register" },
  { path: RoutesNamesPublic.LOGIN, component: Login, type: "Login" },
  { path: RoutesNamesPublic.RESET, component: Reset, type: "Reset" },
];