import Cabecalho from 'components/Cabecalho';
import Configuracao from 'pages/Configuracao';
import Sorteio from 'pages/Sorteio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <RecoilRoot>
        <Routes>
          <Route path="/">
            <Route index element={<Configuracao />} />
            <Route path="sorteio" element={<Sorteio />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
