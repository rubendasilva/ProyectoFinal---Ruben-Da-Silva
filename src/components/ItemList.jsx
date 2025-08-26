import ItemCard from "./ItemCard";

export default function ItemList({ items }) {
    return (
        <section className="grid">
            {items.map((it) => (
                <ItemCard key={it.id} item={it} />
            ))}
        </section>
    );
}
