import { Link, useNavigate } from 'react-router-dom'
import './Menu.css'

function Menu() {
  const navigate = useNavigate()

  // Ao sair, apaga o que foi guardado no login e volta para a tela de login
  function handleSair() {
    localStorage.removeItem('nome')
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <nav className="menu">
      {/* Logo da instituição */}
      <Link to="/lares" className="menu-logo">
        <span>🏠</span> Lares Temporários Admin
      </Link>

      <div className="menu-botoes">
        <Link to="/lares" className="menu-link">Lares</Link>
        <button className="menu-sair" onClick={handleSair}>Sair</button>
      </div>
    </nav>
  )
}

export default Menu
