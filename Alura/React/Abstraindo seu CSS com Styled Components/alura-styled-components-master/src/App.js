import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { temaClaro, temaEscuro } from './Components/UI/themes';
import Cabecalho from './Components/Cabecalho';
import Container from './Components/Container';
import { GlobalStyle } from './Components/GlobalStyle';
import { BtnTema } from './Components/UI';
import ThemeSwitch from './Components/ThemeSwitch';

function App() {
  const [tema, setTema] = useState(true);

  const toggleTheme = () => {
    setTema((theme) => !theme);
  };

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTheme}>
        <ThemeSwitch theme={tema} />
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
