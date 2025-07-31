import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="logo">My Store</div>
            <div className="navLinks">
                <a href="#">Inicio</a>
                <a href="#">Productos</a>
                <a href="#">Contacto</a>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
