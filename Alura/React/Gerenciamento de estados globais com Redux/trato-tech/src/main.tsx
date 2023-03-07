import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from 'routes';
import StoreProvider from 'store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <Routes />
    </StoreProvider>
  </React.StrictMode>
);
