import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'Routes';
import GlobalStyle from 'components/GlobalStyle';
import ReactQueryClient from 'components/ReactQueryClient';

function App() {
  return (
    <RecoilRoot>
      <ReactQueryClient>
        <GlobalStyle />
        <RouterProvider />
      </ReactQueryClient>
    </RecoilRoot>
  );
}

export default App;
