import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Lares from './pages/Lares'

// Aqui ficam as rotas (caminhos) do site.
// Cada Route diz: "quando o endereço for este, mostre esta tela".
function App() {
  return (
    <Routes>
      {/* Endereço "/" mostra a tela de login */}
      <Route path="/" element={<Login />} />
      {/* Endereço "/lares" mostra a listagem de lares */}
      <Route path="/lares" element={<Lares />} />
    </Routes>
  )
}

export default App
