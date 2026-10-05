import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

// Tela de login do administrador
function Login() {
  // Estados para guardar o que a pessoa digita nos campos.
  // Cada vez que ela digita, o estado é atualizado.
  const [code, setCode] = useState('')
  const [senha, setSenha] = useState('')

  // useNavigate serve para trocar de tela pelo código
  const navigate = useNavigate()

  // Função chamada quando o formulário é enviado (clique no botão Entrar)
  async function handleSubmit(event) {
    event.preventDefault() // evita a página recarregar

    // try/catch: se algo der errado na chamada, cai no catch
    // e a tela não quebra
    try {
      // Chama a API de login mandando o code e a senha no body
      const resposta = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, senha }),
      })

      // Transforma a resposta da API em objeto JavaScript
      const dados = await resposta.json()

      if (resposta.ok) {
        // Login deu certo: guarda o nome e o token e vai para a listagem
        localStorage.setItem('nome', dados.nome)
        localStorage.setItem('token', dados.token)
        navigate('/lares')
      } else {
        // Login deu errado: mostra o motivo que veio da API
        alert(dados.error)
      }
    } catch (erro) {
      // Caiu aqui se a API estiver desligada, por exemplo
      alert('Não foi possível conectar com a API. Ela está ligada?')
      console.error(erro)
    }
  }

  return (
    // Fundo dourado da página inteira
    <div className="login-page">
      {/* Card branco com o formulário; onSubmit chama handleSubmit */}
      <form className="login-card" onSubmit={handleSubmit}>
        <h1 className="login-titulo">Acesso Administrativo</h1>
        <p className="login-subtitulo">Entre para gerenciar os lares temporários</p>

        {/* Campo do ID: value mostra o estado, onChange atualiza o estado */}
        <label htmlFor="code">ID Administrativo</label>
        <input
          id="code"
          type="text"
          placeholder="Ex: 123456"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />

        {/* Campo da senha: type="password" esconde o que é digitado */}
        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        {/* Botão que envia o formulário */}
        <button type="submit" className="login-botao">Entrar</button>

        <p className="login-rodape">
          Use seu acesso de coordenador para entrar no sistema
        </p>
      </form>
    </div>
  )
}

export default Login
