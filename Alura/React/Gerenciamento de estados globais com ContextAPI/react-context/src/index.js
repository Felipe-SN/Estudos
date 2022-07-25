import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from 'routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#2A9F85',
    },
    secondary: {
      main: '#FF7070',
    },
  },
});

root.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>
);

