import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";

export default function NavBar() {
    return (
        <header className="site-header">
            <div className="logo">
                <Link to="/">Agencia Viajes</Link>
            </div>
            <nav className="main-nav-wrap">
                <ul className="main-nav">
                    <li><NavLink to="/" end>Inicio</NavLink></li>
                    <li><NavLink to="/category/oceania">Oceania</NavLink></li>
                    <li><NavLink to="/category/asia">Asia</NavLink></li>
                    <li><NavLink to="/category/america">América</NavLink></li>
                    <li><NavLink to="/category/africa">África</NavLink></li>
                    <li className="nav-cart"><NavLink to="/cart"><CartWidget /></NavLink></li>
                </ul>
            </nav>
        </header>
    );
}
