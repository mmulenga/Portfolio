import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './styles/main.css'

// Tailwind v4 scans source text for class-name candidates, so avoid naming
// locals after utilities — it emits the matching CSS even from a variable.
const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element #root not found')
}

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// `npm run build` pre-renders the page into #root, so production hydrates the
// markup that's already there. `npm run dev` serves an empty shell with nothing
// to hydrate — calling hydrateRoot on it would be a mismatch.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
