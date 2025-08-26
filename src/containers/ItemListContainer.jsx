import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../services/products";
import ItemList from "../components/ItemList";

export default function ItemListContainer() {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchProducts(categoryId).then(setItems);
    }, [categoryId]);

    return (
        <main className="container main">
            <ItemList items={items} />
        </main>
    );
}
