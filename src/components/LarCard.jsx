import './LarCard.css'

// Card que mostra os dados de um lar.
// Recebe o lar pelas props.
function LarCard({ lar }) {
  return (
    <div className="lar-card">
      {/* Se não tiver imagem, mostra um ícone no lugar */}
      {lar.imagem ? (
        <img className="lar-imagem" src={lar.imagem} alt={lar.nome} />
      ) : (
        <div className="lar-sem-imagem">🖼️</div>
      )}

      <div className="lar-info">
        <h3 className="lar-nome">{lar.nome}</h3>
        <p className="lar-local">📍 {lar.bairro} - {lar.localizacao}</p>
        <p className="lar-descricao">{lar.descricao}</p>

        <div className="lar-tags">
          <span className="lar-tag">
            {lar.tipo === 'Casa' ? '🏠' : '🏢'} {lar.tipo}
          </span>
          <span className="lar-tag">Acomoda {lar.quantidade_pets} pets</span>
        </div>
      </div>
    </div>
  )
}

export default LarCard
