import { BrowserRouter, Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { Fragment } from "react";
import { useAppSelector } from "../hooks/redux";
import Login from "../pages/Public/Login/Login";
import Home from "../pages/Private/Home/Home";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { isAuth } = useAppSelector((state) => state.isAuthSlice);
  return (
    <BrowserRouter>
      <Routes>
        {isAuth
          ? privateRoutes.map((route) => (
              <Fragment key={route.path}>
                <Route
                  path={route.path}
                  element={<route.component></route.component>}></Route>
                <Route
                  path="*"
                  element={<Home />}></Route>
              </Fragment>
            ))
          : publicRoutes.map((route) => (
              <Fragment key={route.path}>
                <Route
                  path={route.path}
                  element={<route.component></route.component>}></Route>
                <Route
                  path="*"
                  element={<Login />}></Route>
              </Fragment>
            ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
