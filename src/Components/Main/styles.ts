import styled from "styled-components";

export const MainContainer = styled.main`
  height: 100vh;
  background-color: transparent;
  flex: 1;
`;

export const MainTitle = styled.div`
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

export const MainContent = styled.section`
  width: 100%;
  height: calc(100vh - 5rem);
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

export const InfoContainer = styled.div`
  width: 17.6875rem;
  height: 26.875rem;

  background-color: ${({ theme }) => theme["pink-200"]};
  border-radius: 60px;

  position: relative;

  h2 {
    font-size: 1rem;
    text-align: center;
    margin-top: 1.2rem;
  }

  img {
    position: absolute;
    bottom: 0;
  }
`;
