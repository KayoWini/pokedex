import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="pokedex-nav">
      <NavLink to="/">Início</NavLink>
      <NavLink to="/pokemon">Pokémon</NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}

export default Navbar
