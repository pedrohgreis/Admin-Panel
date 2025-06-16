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
import { IoHomeOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { FaHistory } from "react-icons/fa";

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
            }, 500)
          }
        >
          <IoHomeOutline size={20} />
          <h3>Home</h3>
        </ButtonsContainer>

        <ButtonsContainer onClick={() => handleNavigate("/editar")}>
          <CiEdit size={20} />
          <h3>Editar</h3>
        </ButtonsContainer>

        <ButtonsContainer
          onClick={() => setTimeout(() => handleNavigate("/history"), 500)}
        >
          <FaHistory size={20} />
          <h3>Histórico</h3>
        </ButtonsContainer>

        <ButtonsContainer
          onClick={() => setTimeout(() => handleNavigate("/profile"), 500)}
        >
          <FaUser size={20} />
          <h3>Perfil</h3>
        </ButtonsContainer>
      </DivButtons>
    </ContainerAside>
  );
};
