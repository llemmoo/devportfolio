import { StrictMode } from 'react'
import { Provider } from './components/ui/provider.tsx'
import { createRoot } from 'react-dom/client'
import App from './app.tsx'
import { Theme } from '@chakra-ui/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)