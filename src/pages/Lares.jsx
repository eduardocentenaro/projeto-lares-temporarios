// Tela provisória. A listagem de lares vai ser feita no Requisito 5.
function Lares() {
  const nome = localStorage.getItem('nome')

  return (
    <div style={{ padding: 24 }}>
      <h1>Lares Cadastrados</h1>
      <p>Bem-vindo(a), {nome}!</p>
    </div>
  )
}

export default Lares
