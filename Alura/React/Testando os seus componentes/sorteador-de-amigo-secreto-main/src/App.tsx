import Cabecalho from 'components/Cabecalho';
import Card from 'components/Card';
import Configuracao from 'pages/Configuracao';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Card>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<Configuracao />} />
          </Routes>
        </RecoilRoot>
      </Card>
    </BrowserRouter>
  );
};

export default App;
