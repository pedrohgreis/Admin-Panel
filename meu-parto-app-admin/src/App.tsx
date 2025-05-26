import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultThemes } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global"; // <-- Adicione esta linha
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultThemes}>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
