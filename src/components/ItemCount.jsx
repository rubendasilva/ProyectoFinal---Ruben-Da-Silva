import { useEffect, useState } from "react";


export default function ItemCount({ initial = 1, stock = 0, onAdd }) {
    const [qty, setQty] = useState(initial);


    useEffect(() => { setQty((q) => (q > stock ? stock : q)); }, [stock]);


    function dec() { setQty((q) => Math.max(1, q - 1)); }
    function inc() { setQty((q) => Math.min(stock, q + 1)); }
    function add() { if (stock > 0 && qty >= 1) onAdd(qty); }


    if (stock <= 0) return <p className="warn">Producto sin stock</p>;


    return (
        <div className="item-count">
            <div className="item-count-controls">
                <button onClick={dec} disabled={qty <= 1} aria-label="Restar">-</button>
                <span>{qty}</span>
                <button onClick={inc} disabled={qty >= stock} aria-label="Sumar">+</button>
            </div>
            <button className="btn" onClick={add}>Agregar al carrito</button>
        </div>
    );
}