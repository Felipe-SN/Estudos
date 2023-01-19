import GlobalStyle from 'components/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Routes from 'Routes';

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyle />
        <Routes />
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
