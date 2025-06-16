import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileTitle = styled.div`
  width: 100%;
  //height: 3rem;
  background-color: transparent;
  color: ${({ theme }) => theme["pink-400"]};
  margin-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: larger;
`;

export const Form = styled.form`
  width: 100%;
  height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const ProfileFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 2rem auto;
`;

export const ProfileField = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme["gray-100"]};
  padding: 1rem 1.5rem;
  border-radius: 8px;
  width: 100%;
`;

export const ProfileLabel = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme["gray-700"]};
  margin-bottom: 0.25rem;
`;

export const ProfileValue = styled.span`
  color: ${({ theme }) => theme["gray-400"]};
  font-size: 1.1rem;
`;

export const Button = styled.button`
  width: 6rem;
  min-width: 4rem;
  height: 2.5rem;
  background: ${({ theme }) => theme["pink-400"]};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme["pink-500"]};
    transition: background-color 0.2s;
  }
`;
