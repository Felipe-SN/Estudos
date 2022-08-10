import Cabecalho from 'components/Cabecalho';
import Formulario from 'components/Formulario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Formulario />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
