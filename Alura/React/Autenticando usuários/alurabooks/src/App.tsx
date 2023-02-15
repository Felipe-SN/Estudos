import GlobalStyle from 'components/GlobalStyle';
import { RecoilRoot } from 'recoil';
import RoutesProvider from 'Routes';

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <RoutesProvider />
    </RecoilRoot>
  );
};

export default App;
