import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Lares from './pages/Lares'

// Aqui ficam as rotas (caminhos) do site
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/lares" element={<Lares />} />
    </Routes>
  )
}

export default App
