import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cabecalho from 'components/Cabecalho';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Cabecalho />
    <App />
  </React.StrictMode>
);
