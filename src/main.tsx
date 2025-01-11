import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './Store/index.ts';
import { checkAuthAction, fetchMoviesActions } from './Store/api-actions.ts';
import { ToastContainer } from 'react-toastify';

store.dispatch(fetchMoviesActions());
store.dispatch(checkAuthAction());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </StrictMode>,
)
