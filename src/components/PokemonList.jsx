import PokemonCard from './PokemonCard'
import { useState, useEffect } from 'react'
import { fetchPokemonList } from '../services/pokemonApi'

function PokemonList() {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [filtro, setFiltro] = useState('')

    useEffect(() => {
        let cancelled = false

        async function loadPokemons() {
            try {
                setLoading(true)
                setError(null)

                const data = await fetchPokemonList(20)

                if (!cancelled) {
                    setPokemons(data)
                }

            } catch (err) {
                if (!cancelled) {
                    setError(err.message ?? 'Erro ao carregar.')
                }

            } finally {
                if (!cancelled) {
                    setLoading(false)
                }
            }
        }

        loadPokemons()

        return () => {
            cancelled = true
        }

    }, [])

    const listaFiltrada = pokemons.filter((p) =>
        p.name.toLowerCase().includes(filtro.toLowerCase())
    )

    return (
        <section>

            <div className="search-container">

                <label htmlFor="busca">
                    Buscar por nome:
                </label>

                <input
                    id="busca"
                    type="search"
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                    placeholder="Ex.: char"
                />

            </div>

            <p>
                Exibindo {listaFiltrada.length} Pokémon(s)
            </p>

            {loading && <p>Carregando Pokémon...</p>}

            {error && <p role="alert">{error}</p>}

            {!loading && !error && listaFiltrada.length === 0 && (
                <p>Nenhum Pokémon encontrado.</p>
            )}

            {!loading && !error && listaFiltrada.length > 0 && (
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
            )}

        </section>
    )
}

export default PokemonList