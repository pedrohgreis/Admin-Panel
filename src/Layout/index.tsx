/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from "react-router-dom";
import { Aside } from "../Components/Aside";
import { HomeContainer } from "../Pages/Home/styles";

export const Layout = () => {
  return (
    <HomeContainer>
      <Aside />
      <Outlet />
    </HomeContainer>
  );
};
