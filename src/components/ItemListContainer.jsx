import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import ItemList from "./ItemList.jsx";


export default function ItemListContainer({ greeting }) {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function load() {
            setLoading(true);
            try {
                const ref = collection(db, "products");
                const q = categoryId ? query(ref, where("category", "==", categoryId)) : ref;
                const snap = await getDocs(q);
                const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
                setItems(data);
            } catch (e) { console.error(e); }
            finally { setLoading(false); }
        }
        load();
    }, [categoryId]);


    if (loading) return <p className="state loading">Cargando productos...</p>;
    if (!items.length) return <p className="state empty">No hay productos en esta categoría.</p>;


    return (
        <section className="catalog">
            <h1>{greeting}</h1>
            <ItemList items={items} />
        </section>
    );
}