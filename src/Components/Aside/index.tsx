import React from "react";

import { useNavigate } from "react-router-dom";
import {
  ButtonsContainer,
  ContainerAside,
  Logo,
  DivButtons,
  Username,
  LogoSection,
} from "./styles";
// icons
import { FaUser } from "react-icons/fa";

export const Aside = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <ContainerAside>
      <LogoSection>
        <Logo>
          <FaUser size={30} />
        </Logo>
        <Username>Nome do Usuário</Username>
      </LogoSection>

      <DivButtons>
        <ButtonsContainer
          onClick={() =>
            setTimeout(() => {
              console.log("Home");
              handleNavigate("/");
            }, 1000)
          }
        >
          <h3>Home</h3>
        </ButtonsContainer>

        <ButtonsContainer onClick={() => handleNavigate("/editar")}>
          <h3>Editar</h3>
        </ButtonsContainer>

        <ButtonsContainer>
          <h3>Histórico</h3>
        </ButtonsContainer>

        <ButtonsContainer>
          <h3>Perfil</h3>
        </ButtonsContainer>
      </DivButtons>
    </ContainerAside>
  );
};
