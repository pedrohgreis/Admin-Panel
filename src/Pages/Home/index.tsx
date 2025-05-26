import React from "react";
import { Aside } from "../../Components/Aside";
import { Main } from "../../Components/Main/index";
import { HomeContainer } from "./styles";

export const Home = () => {
  return (
    <>
      <HomeContainer>
        <Aside />
        <Main />
      </HomeContainer>
    </>
  );
};
