import React from 'react';
import image from 'assets/img/doguito404.svg';
import 'assets/css/404.css';

const Error404 = () => {
  return (
    <main className="container flex flex--centro flex--coluna">
      <img className="doguito-imagem" src={image} alt="ilustração doguito" />
      <p className="naoencontrado-texto">Ops, essa página não existe!</p>
    </main>
  );
};

export default Error404;
