import { queryClient } from 'state/reactQuery/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'Routes';
import GlobalStyle from 'components/GlobalStyle';

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
