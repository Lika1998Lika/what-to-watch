import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { movie } from './Mocks/films.ts'
import { review } from './Mocks/reviews.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App films={movie} reviews={review} />
  </StrictMode>,
)
