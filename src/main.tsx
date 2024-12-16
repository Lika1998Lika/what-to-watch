import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { review } from './Mocks/reviews.ts'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App reviews={review} />
    </Provider>
  </StrictMode>,
)
