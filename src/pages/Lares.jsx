import { useState, useEffect } from 'react'
import Menu from '../components/Menu'
import LarCard from '../components/LarCard'
import './Lares.css'

// Tela que lista os lares cadastrados
function Lares() {
  // Estados da tela
  const [lares, setLares] = useState([]) // lista que vem da API
  const [erro, setErro] = useState('') // mensagem de erro, se der problema
  const [busca, setBusca] = useState('') // texto da pesquisa
  const [filtro, setFiltro] = useState('Todos') // Todos, Casa ou Apartamento

  // useEffect roda quando a tela abre: busca os lares na API.
  // O [] no final faz rodar só uma vez.
  useEffect(() => {
    async function buscarLares() {
      try {
        const resposta = await fetch('/lares')

        // Se a API respondeu com erro, pula para o catch
        if (!resposta.ok) {
          throw new Error('Erro ao buscar os lares')
        }

        const dados = await resposta.json()
        setLares(dados) // guarda a resposta no estado
      } catch (e) {
        // Se a API estiver desligada, mostra uma mensagem na tela
        console.error(e)
        setErro('Não foi possível carregar os lares. A API está ligada?')
      }
    }

    buscarLares()
  }, [])

  // Cria uma nova lista só com os lares que combinam com
  // o texto da busca E com o tipo escolhido no filtro
  const laresFiltrados = lares.filter((lar) => {
    const texto = busca.toLowerCase()
    // A busca olha o nome, o bairro e a cidade
    const combinaComBusca =
      lar.nome.toLowerCase().includes(texto) ||
      lar.bairro.toLowerCase().includes(texto) ||
      lar.localizacao.toLowerCase().includes(texto)
    // "Todos" aceita qualquer tipo; senão o tipo precisa ser igual
    const combinaComTipo = filtro === 'Todos' || lar.tipo === filtro

    return combinaComBusca && combinaComTipo
  })

  // Botões de filtro: o valor é o que vem da API, o texto é o que aparece
  const filtros = [
    { valor: 'Todos', texto: 'Todos' },
    { valor: 'Casa', texto: 'Casas' },
    { valor: 'Apartamento', texto: 'Apartamentos' },
  ]

  return (
    <div>
      {/* Menu do topo */}
      <Menu />

      <main className="lares-conteudo">
        <h1 className="lares-titulo">Lares Cadastrados</h1>
        <p className="lares-subtitulo">Gerencie os cadastros de acolhimento temporário</p>

        {/* Linha com o campo de busca e os botões de filtro */}
        <div className="lares-barra">
          <input
            className="lares-busca"
            type="text"
            placeholder="🔍 Pesquisar por nome ou cidade..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />

          <div className="lares-filtros">
            {/* map cria um botão para cada filtro da lista acima.
                O botão selecionado ganha a classe "filtro-ativo" (dourado) */}
            {filtros.map((f) => (
              <button
                key={f.valor}
                className={filtro === f.valor ? 'filtro filtro-ativo' : 'filtro'}
                onClick={() => setFiltro(f.valor)}
              >
                {f.texto}
              </button>
            ))}
          </div>
        </div>

        {/* Mensagem de erro (só aparece se a variável erro tiver texto) */}
        {erro && <p className="lares-erro">{erro}</p>}

        {/* Grade de cards: um LarCard para cada lar filtrado */}
        <div className="lares-grade">
          {laresFiltrados.map((lar) => (
            <LarCard key={lar.id} lar={lar} />
          ))}
        </div>

        {/* Aviso quando a busca/filtro não encontra nenhum lar */}
        {!erro && laresFiltrados.length === 0 && (
          <p className="lares-vazio">Nenhum lar encontrado.</p>
        )}
      </main>
    </div>
  )
}

export default Lares
