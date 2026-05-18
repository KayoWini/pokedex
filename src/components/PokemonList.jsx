import PokemonCard from './PokemonCard'
import { useState } from 'react'

const POKEMONS = [
    {
        id: 25,
        name: 'Pikachu',
        type: 'Elétrico',
        imageUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    },
    {
        id: 1,
        name: 'Bulbasaur',
        type: 'Grama / Veneno',
        imageUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
    {
        id: 4,
        name: 'Charmander',
        type: 'Fogo',
        imageUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
    {
        id: 7,
        name: 'Squitle',
        type: 'Água',
        imageUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    },
    {
        id: 38,
        name: 'Ninetales',
        type: 'Fogo',
        imageUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
    },
    {
        id: 64,
        name: 'Kadabra',
        type: 'Psíquico',
        imageUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png',
    },
]

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