import ItemCount from "./ItemCount.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function ItemDetail({ item }) {
    const { addItem } = useCart();
    const { id, title, description, price, stock, thumbnail } = item;

    function srcFor(thumbnail) {
        if (!thumbnail) return "";
        return thumbnail.startsWith("http") ? thumbnail : process.env.PUBLIC_URL + thumbnail;
    }

    function handleAdd(qty) {
        addItem(item, qty);
    }

    return (
        <section className="item-detail">
            <h2 className="detail-title">{title}</h2>
            <img src={srcFor(thumbnail)} alt={title} className="detail-image" />
            <p className="detail-desc">{description}</p>
            <p className="detail-price">${price}</p>
            <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
        </section>
    );
}
