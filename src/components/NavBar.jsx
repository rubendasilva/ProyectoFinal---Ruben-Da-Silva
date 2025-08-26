import { Link, NavLink } from "react-router-dom";
import { categories } from "../data/products";

export default function NavBar() {
    return (
        <header className="navbar">
            <div className="container navbar-inner">
                <Link to="/" className="brand">Agencia</Link>
                <nav className="nav">
                    <NavLink to="/" end>Inicio</NavLink>
                    {categories.filter(c => c.id !== "all").map(c => (
                        <NavLink key={c.id} to={`/category/${c.id}`}>{c.name}</NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
}
