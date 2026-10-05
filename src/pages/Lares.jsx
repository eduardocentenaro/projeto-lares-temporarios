import { useState } from 'react'
import Menu from '../components/Menu'
import LarCard from '../components/LarCard'
import './Lares.css'

// Lares de exemplo, só para montar a tela.
// No Requisito 6 isso vai ser trocado pelos dados que vêm da API.
const laresExemplo = [
  {
    id: 1,
    nome: 'Casa do Ouro',
    tipo: 'Casa',
    bairro: 'Jardim das Flores',
    quantidade_pets: 3,
    descricao: 'Fachada espaçosa com varanda ensolarada e área cercada perfeita para acolhimento temporário.',
    imagem: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500',
    localizacao: 'São Paulo, SP',
  },
  {
    id: 2,
    nome: 'Lar Sol Nascente',
    tipo: 'Apartamento',
    bairro: 'Copacabana',
    quantidade_pets: 1,
    descricao: 'Apartamento confortável com área externa coberta, ideal para acolhimento com supervisão familiar.',
    imagem: '',
    localizacao: 'Rio de Janeiro, RJ',
  },
  {
    id: 3,
    nome: 'Recanto do Ouro',
    tipo: 'Casa',
    bairro: 'Jardim Botânico',
    quantidade_pets: 4,
    descricao: 'Casa familiar com grande quintal e entrada ampla, ideal para acolhimento com espaço ao ar livre.',
    imagem: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=500',
    localizacao: 'Belo Horizonte, MG',
  },
]

function Lares() {
  const [lares] = useState(laresExemplo)
  const [busca, setBusca] = useState('') // texto da pesquisa
  const [filtro, setFiltro] = useState('Todos') // Todos, Casa ou Apartamento

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

        <div className="lares-grade">
          {laresFiltrados.map((lar) => (
            <LarCard key={lar.id} lar={lar} />
          ))}
        </div>

        {laresFiltrados.length === 0 && (
          <p className="lares-vazio">Nenhum lar encontrado.</p>
        )}
      </main>
    </div>
  )
}

export default Lares
