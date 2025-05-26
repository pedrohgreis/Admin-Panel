/* eslint-disable react/react-in-jsx-scope */
import { InfoContainer, MainContainer, MainContent, MainTitle } from "./styles";

// img
import user from "../../assets/img/users.svg";
import logged from "../../assets/img/logged.svg";
import newUser from "../../assets/img/newUser.svg";

export const Main = () => {
  return (
    <MainContainer>
      <MainTitle>
        <h1>Meu Parto App</h1>
      </MainTitle>

      <MainContent>
        <InfoContainer>
          <h2>Quantidade de usuários</h2>
          <img src={user} alt="User Icon" />
        </InfoContainer>

        <InfoContainer>
          <h2>Logados hoje</h2>
          <img src={logged} alt="Logged Icon" />
        </InfoContainer>

        <InfoContainer>
          <h2>Novos usuários nessa semana</h2>
          <img src={newUser} alt="New User Icon" />
        </InfoContainer>
      </MainContent>
    </MainContainer>
  );
};
