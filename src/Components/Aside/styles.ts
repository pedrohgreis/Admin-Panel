import styled from "styled-components";

export const ContainerAside = styled.aside`
  width: 22.875rem;
  height: 100vh;
  background-color: ${({ theme }) => theme["gray-200"]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

export const Logo = styled.div`
  width: 5.75rem;
  max-width: 6rem;
  height: 5.75rem;
  margin-top: 2.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme["gray-300"]};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Username = styled.span`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme["gray-700"]};
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;

  width: 100%;
  height: 4.125rem;

  background-color: ${({ theme }) => theme["gray-100"]};

  cursor: pointer;

  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme["blush-300"]};
    color: ${({ theme }) => theme["pink-50"]};
  }
`;
