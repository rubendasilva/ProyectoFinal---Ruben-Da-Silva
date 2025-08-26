import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../services/products";
import ItemDetail from "../components/ItemDetail";

export default function ItemDetailContainer() {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetchProductById(itemId).then(setItem);
    }, [itemId]);

    if (!item) return <p>Cargando...</p>;
    return <ItemDetail item={item} />;
}
