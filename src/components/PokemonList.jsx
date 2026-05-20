import PokemonCard from './PokemonCard'
import { useState } from 'react'
import { POKEMONS } from '../data/pokemon.js'

function PokemonList() {
    const [pokemons] = useState(POKEMONS)
    const [filtro, setFiltro] = useState('')

    const listaFiltrada = pokemons.filter((p) =>
        p.name.toLowerCase().includes(filtro.toLowerCase())
    )

    return (
        <section>
            <div className='search-container'>
                <label htmlFor="busca">Buscar por nome: </label>
                <input
                    id="busca"
                    type="search"
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                    placeholder="Ex.: char"
                />
            </div>

            <p>Mostrando {listaFiltrada.length} Pokemón(s)</p>

            {
                listaFiltrada.length === 0 ? (
                    <p>Nenhum Pokemón encontrado para essa busca</p>
                ) : (
                    <div className="cards-container">
                        {listaFiltrada.map((pokemon) => (
                            <PokemonCard
                                key={pokemon.id}
                                id={pokemon.id}
                                name={pokemon.name}
                                type={pokemon.type}
                                imageUrl={pokemon.imageUrl}
                            />
                        ))}
                    </div>
                )
            }
        </section >
    )
}

export default PokemonList