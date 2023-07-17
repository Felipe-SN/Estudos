import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'Routes';
import GlobalStyle from 'components/GlobalStyle';
import ClientReactQuery from 'components/ClientReactQuery';
import ClientApollo from 'components/ClientApollo';

function App() {
  return (
    <ClientApollo>
      <RecoilRoot>
        <ClientReactQuery>
          <GlobalStyle />
          <RouterProvider />
        </ClientReactQuery>
      </RecoilRoot>
    </ClientApollo>
  );
}

export default App;
