import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import ItemDetail from "./ItemDetail.jsx";


export default function ItemDetailContainer() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function load() {
            setLoading(true);
            try {
                const ref = doc(db, "products", id);
                const snap = await getDoc(ref);
                if (snap.exists()) setItem({ id: snap.id, ...snap.data() });
            } catch (e) { console.error(e); }
            finally { setLoading(false); }
        }
        load();
    }, [id]);


    if (loading) return <p className="state loading">Cargando detalle...</p>;
    if (!item) return <p className="state empty">Producto no encontrado.</p>;


    return <ItemDetail item={item} />;
}