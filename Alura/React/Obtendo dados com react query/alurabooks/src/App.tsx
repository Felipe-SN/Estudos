import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'Routes';
import GlobalStyle from 'components/GlobalStyle';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <RouterProvider />
    </RecoilRoot>
  );
}

export default App;
