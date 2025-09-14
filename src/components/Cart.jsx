import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";


export default function Cart() {
    const { items, removeItem, clearCart, totalPrice } = useCart();

    if (!items.length) {
        return (
            <section className="cart">
                <p>Carrito vacío</p>
                <Link to="/" className="btn">Ir al catálogo</Link>
            </section>
        );
    }

    return (
        <section className="cart">
            <h2>Carrito</h2>
            <ul className="cart-list">
                {items.map((it) => (
                    <li key={it.id} className="cart-item">
                        <img src={it.thumbnail} alt={it.title} />
                        <div className="cart-info">
                            <h4>{it.title}</h4>
                            <p>Cantidad: {it.qty}</p>
                            {/* $ como texto + expresión en llaves */}
                            <p>Subtotal: {'$'}{it.qty * it.price}</p>
                        </div>
                        <button className="link" onClick={() => removeItem(it.id)}>Quitar</button>
                    </li>
                ))}
            </ul>
            <div className="cart-footer">
                <p className="total">
                    Total: {'$'}{totalPrice}
                </p>
                <div className="cart-actions">
                    <button className="link" onClick={clearCart}>Vaciar carrito</button>
                    <Link to="/checkout" className="btn">Finalizar compra</Link>
                </div>
            </div>
        </section>
    );
}