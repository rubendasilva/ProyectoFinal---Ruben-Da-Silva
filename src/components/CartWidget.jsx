import { useCart } from "../context/CartContext.jsx";

export default function CartWidget() {
    const { totalQty } = useCart();
    return (
        <span className="cart-widget">
            🛒{totalQty > 0 && <span className="cart-count">{totalQty}</span>}
        </span>
    );
}
