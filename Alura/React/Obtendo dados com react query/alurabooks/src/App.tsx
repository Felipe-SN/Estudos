import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from 'components/GlobalStyle';

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <RouterProvider />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
