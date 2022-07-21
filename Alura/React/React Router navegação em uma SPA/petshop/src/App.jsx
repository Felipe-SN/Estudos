import 'assets/css/base/base.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from 'pages/Category';
import Error404 from 'pages/Error404';
import Header from 'components/Header';
import Home from 'pages/Home';
import Post from 'pages/Post';
import React from 'react';
import Sobre from 'pages/Sobre';
import SubCategory from 'pages/SubCategory';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="categoria/:id" element={<Category />} />
        <Route path="categoria/:id/:subCategory" element={<SubCategory />} />
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;

