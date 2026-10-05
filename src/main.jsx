// Importa o React e a função que "liga" o React ao HTML
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// BrowserRouter permite trocar de tela (rotas) sem recarregar a página
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Pega a div "root" do index.html e coloca o nosso App dentro dela.
// O BrowserRouter fica por fora para todas as telas poderem usar rotas.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
