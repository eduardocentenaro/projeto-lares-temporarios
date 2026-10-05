import { useState, useEffect } from 'react'
import Menu from '../components/Menu'
import LarCard from '../components/LarCard'
import './Lares.css'

function Lares() {
  const [lares, setLares] = useState([]) // lista que vem da API
  const [erro, setErro] = useState('') // mensagem de erro, se der problema
  const [busca, setBusca] = useState('') // texto da pesquisa
  const [filtro, setFiltro] = useState('Todos') // Todos, Casa ou Apartamento

  // useEffect roda quando a tela abre: busca os lares na API
  useEffect(() => {
    async function buscarLares() {
      try {
        const resposta = await fetch('/lares')

        if (!resposta.ok) {
          throw new Error('Erro ao buscar os lares')
        }

        const dados = await resposta.json()
        setLares(dados) // guarda a resposta no estado
      } catch (e) {
        console.error(e)
        setErro('Não foi possível carregar os lares. A API está ligada?')
      }
    }

    buscarLares()
  }, [])

  // Filtra a lista pelo tipo e pelo texto digitado
  const laresFiltrados = lares.filter((lar) => {
    const texto = busca.toLowerCase()
    const combinaComBusca =
      lar.nome.toLowerCase().includes(texto) ||
      lar.bairro.toLowerCase().includes(texto) ||
      lar.localizacao.toLowerCase().includes(texto)
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
      <Menu />

      <main className="lares-conteudo">
        <h1 className="lares-titulo">Lares Cadastrados</h1>
        <p className="lares-subtitulo">Gerencie os cadastros de acolhimento temporário</p>

        <div className="lares-barra">
          <input
            className="lares-busca"
            type="text"
            placeholder="🔍 Pesquisar por nome ou cidade..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />

          <div className="lares-filtros">
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

        {erro && <p className="lares-erro">{erro}</p>}

        <div className="lares-grade">
          {laresFiltrados.map((lar) => (
            <LarCard key={lar.id} lar={lar} />
          ))}
        </div>

        {!erro && laresFiltrados.length === 0 && (
          <p className="lares-vazio">Nenhum lar encontrado.</p>
        )}
      </main>
    </div>
  )
}

export default Lares
