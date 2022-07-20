import 'assets/css/base/base.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from 'pages/Home';
import Sobre from 'pages/Sobre';
import Error404 from 'pages/Error404';
import Header from 'components/Header';
import Post from 'pages/Post';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;

