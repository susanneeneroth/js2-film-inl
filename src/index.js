import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 10, // 10 seconds
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
