import { HistoryContainer } from "./styles";

/* eslint-disable react/react-in-jsx-scope */
export const Historic = () => {
  return (
    <HistoryContainer>
      <table>
        <thead>
          <tr>
            <th>Perfil</th>
            <th>Nome do Usuário</th>
            <th>Título</th>
            <th>Editado em</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Usuário</td>
            <td>João Silva</td>
            <td>Meu Primeiro Parto</td>
            <td>01/01/2023</td>
          </tr>

          <tr>
            <td>Usuário</td>
            <td>Maria Oliveira</td>
            <td>Minha Experiência de Parto</td>
            <td>15/02/2023</td>
          </tr>

          <tr>
            <td>Usuário</td>
            <td>Carlos Souza</td>
            <td>Parto Normal: O que Esperar</td>
            <td>20/03/2023</td>
          </tr>
        </tbody>
      </table>
    </HistoryContainer>
  );
};
