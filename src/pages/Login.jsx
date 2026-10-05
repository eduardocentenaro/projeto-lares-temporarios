import { useState } from 'react'
import './Login.css'

function Login() {
  // Estados para guardar o que a pessoa digita nos campos
  const [code, setCode] = useState('')
  const [senha, setSenha] = useState('')

  // Função chamada quando o formulário é enviado (clique no botão)
  function handleSubmit(event) {
    event.preventDefault() // evita a página recarregar
    // A chamada da API vai ser feita no Requisito 3
    console.log('Dados digitados:', code, senha)
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1 className="login-titulo">Acesso Administrativo</h1>
        <p className="login-subtitulo">Entre para gerenciar os lares temporários</p>

        <label htmlFor="code">ID Administrativo</label>
        <input
          id="code"
          type="text"
          placeholder="Ex: 123456"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />

        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <button type="submit" className="login-botao">Entrar</button>

        <p className="login-rodape">
          Use seu acesso de coordenador para entrar no sistema
        </p>
      </form>
    </div>
  )
}

export default Login
