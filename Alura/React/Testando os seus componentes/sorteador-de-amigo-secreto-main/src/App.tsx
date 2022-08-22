import Cabecalho from 'components/Cabecalho';
import Configuracao from 'pages/Configuracao';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Configuracao />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
