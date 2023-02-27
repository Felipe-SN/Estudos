import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Footer from 'components/Footer';
import Menu from 'components/Menu';

const Cardapio = lazy(() => import('pages/Cardapio'));
const Inicio = lazy(() => import('pages/Inicio'));
const NotFound = lazy(() => import('pages/NotFound'));
const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));
const Prato = lazy(() => import('pages/Prato'));
const Sobre = lazy(() => import('pages/Sobre'));

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Suspense fallback={<h2>CARREGANDO...</h2>}>
          <Routes>
            <Route path="/" element={<PaginaPadrao />}>
              <Route index element={<Inicio />} />
              <Route path="cardapio" element={<Cardapio />} />
              <Route path="sobre" element={<Sobre />} />
            </Route>
            <Route path="prato/:id" element={<Prato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </main>
  );
}
