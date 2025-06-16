/* eslint-disable react/react-in-jsx-scope */

import {
  Form,
  ProfileContainer,
  ProfileTitle,
  ProfileFields,
  ProfileLabel,
  ProfileField,
  ProfileValue,
  Button,
} from "./styles";

export const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileTitle>Informações do usuário</ProfileTitle>

      <Form>
        <ProfileFields>
          <ProfileField>
            <ProfileLabel htmlFor="user">Nome do usuário</ProfileLabel>
            <ProfileValue>UserName</ProfileValue>
          </ProfileField>
          <ProfileField>
            <ProfileLabel htmlFor="name">Nome:</ProfileLabel>
            <ProfileValue>Name</ProfileValue>
          </ProfileField>
          <ProfileField>
            <ProfileLabel htmlFor="email">E-mail:</ProfileLabel>
            <ProfileValue>email@email.com</ProfileValue>
          </ProfileField>
        </ProfileFields>
        <Button type="button">Sair</Button>
      </Form>
    </ProfileContainer>
  );
};
