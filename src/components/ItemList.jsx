import Item from "./Item.jsx";

export default function ItemList({ items }) {
    return (
        <div className="item-list">
            {items.map((p) => (
                <Item key={p.id} {...p} />
            ))}
        </div>
    );
}
