import GlobalStyle from 'components/GlobalStyle';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'Routes';

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <RouterProvider />
    </RecoilRoot>
  );
};

export default App;
