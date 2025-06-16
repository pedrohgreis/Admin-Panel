import styled from "styled-components";

export const Edit = styled.form`
  width: 95%;
  max-width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

export const EditField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: transparent;
`;

export const EditLabel = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme["gray-700"]};
`;

export const EditInput = styled.input`
  padding: 0.6rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme["gray-300"]};
`;

export const SelectInput = styled.select`
  padding: 0.6rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme["gray-300"]};
  background-color: ${({ theme }) => theme["white"]};
  color: ${({ theme }) => theme["gray-700"]};
`;

export const Textarea = styled.textarea`
  padding: 0.6rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme["gray-300"]};
  resize: vertical;
  min-height: 100px;
`;

export const EditFieldGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
`;
