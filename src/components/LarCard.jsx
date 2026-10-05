import './LarCard.css'

// Card que mostra os dados de um lar.
function LarCard({ lar }) {
  return (
    <div className="lar-card">
      {/* Parte de cima: se o lar tiver imagem mostra a foto,
          se não tiver mostra um ícone no lugar */}
      {lar.imagem ? (
        <img className="lar-imagem" src={lar.imagem} alt={lar.nome} />
      ) : (
        <div className="lar-sem-imagem">🖼️</div>
      )}

      {/* Parte de baixo: textos do lar */}
      <div className="lar-info">
        <h3 className="lar-nome">{lar.nome}</h3>
        <p className="lar-local">{lar.bairro} - {lar.localizacao}</p>
        <p className="lar-descricao">{lar.descricao}</p>

        {/* Tags com o tipo e a quantidade de pets que o lar acomoda */}
        <div className="lar-tags">
          <span className="lar-tag">
            {/* O ícone muda conforme o tipo: casa ou apartamento */}
            {/* ideia da ia */}
            {lar.tipo === 'Casa' ? '🏠' : '🏢'} {lar.tipo}
          </span>
          <span className="lar-tag">Acomoda {lar.quantidade_pets} pets</span>
        </div>
      </div>
    </div>
  )
}

export default LarCard
