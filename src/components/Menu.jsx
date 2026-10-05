import { Link, useNavigate } from 'react-router-dom'
import './Menu.css'

// Menu que fica no topo das telas internas do sistema
function Menu() {
  // useNavigate permite trocar de tela pelo código (usado no botão Sair)
  const navigate = useNavigate()

  // Função do botão Sair: apaga o que foi guardado no login
  // e volta para a tela de login
  function handleSair() {
    localStorage.removeItem('nome')
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <nav className="menu">
      {/* Logo da instituição: ao clicar, vai para a listagem de lares */}
      <Link to="/lares" className="menu-logo">
        <span>🏠</span> Lares Temporários Admin
      </Link>

      {/* Lado direito: link para os lares e botão de sair */}
      <div className="menu-botoes">
        {/* Link troca de tela sem recarregar a página */}
        <Link to="/lares" className="menu-link">Lares</Link>
        <button className="menu-sair" onClick={handleSair}>Sair</button>
      </div>
    </nav>
  )
}

export default Menu
