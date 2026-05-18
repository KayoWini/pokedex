function PokemonCard({ id, name, type, imageUrl }) {
    return (
        <div className="pokemon-card">
            <img src={imageUrl} alt={name} />
            <h2>
                #{String(id).padStart(3, '0')} — {name}
            </h2>
            <p>Tipo: {type}</p>
        </div>
    )
}

export default PokemonCard
