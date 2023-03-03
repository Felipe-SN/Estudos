import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from 'routes';
import ProviderRedux from 'store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProviderRedux>
      <Routes />
    </ProviderRedux>
  </React.StrictMode>
);
