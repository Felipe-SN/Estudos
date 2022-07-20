import 'assets/css/base/base.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from 'pages/Home';
import Sobre from 'pages/Sobre';
import Error404 from 'pages/Error404';
import Header from 'components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;

