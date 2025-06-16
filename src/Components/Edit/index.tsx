/* eslint-disable react/react-in-jsx-scope */
import {
  Edit,
  EditField,
  EditLabel,
  EditFieldGroup,
  EditInput,
  SelectInput,
  Textarea,
} from "./styles";

export const ToEdit = () => {
  return (
    <Edit>
      <EditFieldGroup>
        <EditField>
          <EditLabel htmlFor="name">Nome</EditLabel>
          <EditInput type="text" id="name" placeholder="Digite seu nome" />
        </EditField>

        <EditField>
          <EditLabel htmlFor="title">Titulo</EditLabel>
          <EditInput type="text" id="titulo" placeholder="Digite um titulo" />
        </EditField>
      </EditFieldGroup>

      <EditLabel htmlFor="category">Categoria</EditLabel>
      <SelectInput id="category">
        <option value="category0">Selecione uma opção</option>
        <option value="category1">Categoria 1</option>
        <option value="category2">Categoria 2</option>
        <option value="category3">Categoria 3</option>
      </SelectInput>

      <Textarea placeholder="Assunto" />
    </Edit>
  );
};
