import { Routes, Route } from 'react-router-dom';
import AdminBasePage from 'paginas/Administracao';
import AdminRestaurantes from 'paginas/Administracao/Restaurantes';
import FormRestaurantes from 'paginas/Administracao/Restaurantes/Formulario';
import Home from 'paginas/Home';
import VitrineRestaurantes from 'paginas/VitrineRestaurantes';
import AdminPratos from 'paginas/Administracao/Pratos';
import FormPratos from 'paginas/Administracao/Pratos/Formulario';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="restaurantes" element={<VitrineRestaurantes />} />

      <Route path="admin" element={<AdminBasePage />}>
        <Route path="restaurantes">
          <Route path="" element={<AdminRestaurantes />} />
          <Route path="novo" element={<FormRestaurantes />} />
          <Route path=":id" element={<FormRestaurantes />} />
        </Route>

        <Route path="pratos">
          <Route path="" element={<AdminPratos />} />
          <Route path="novo" element={<FormPratos />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

