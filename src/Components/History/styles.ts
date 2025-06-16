import styled from "styled-components";

export const HistoryContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: blanchedalmond;

  table {
    width: 80%;
    border-collapse: collapse; /* Junta as bordas das células */
  }

  th,
  td {
    border: 1px solid ${({ theme }) => theme["gray-400"]}; /* Borda entre células */
    padding: 0.75rem;
    text-align: left;
  }

  th {
    text-align: center;
    background: ${({ theme }) => theme["gray-200"]};
  }
`;
