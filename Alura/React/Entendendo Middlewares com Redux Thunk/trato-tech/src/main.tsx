import { createStandaloneToast } from '@chakra-ui/toast';
import ReactDOM from 'react-dom/client';
import Routes from 'routes';
import StoreProvider from 'store';
import './index.css';

const { ToastContainer } = createStandaloneToast();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider>
    <Routes />
    <ToastContainer />
  </StoreProvider>
);
