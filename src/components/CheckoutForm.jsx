import { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useCart } from "../context/CartContext.jsx";


export default function CheckoutForm() {
    const { items, totalPrice, clearCart } = useCart();
    const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);


    async function handleSubmit(e) {
        e.preventDefault();
        if (!items.length) return;
        setLoading(true);
        try {
            const order = {
                buyer,
                items: items.map(({ id, title, price, qty }) => ({ id, title, price, qty })),
                total: totalPrice,
                createdAt: Timestamp.now(),
            };
            const ref = await addDoc(collection(db, "orders"), order);
            setOrderId(ref.id);
            clearCart();
        } catch (e) { console.error(e); }
        finally { setLoading(false); }
    }


    if (orderId) {
        return (
            <section className="checkout">
                <h2>¡Gracias por tu compra!</h2>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
            </section>
        );
    }


    return (
        <section className="checkout">
            <h2>Checkout</h2>
            {!items.length ? (
                <p>Carrito vacío.</p>
            ) : (
                <form className="form" onSubmit={handleSubmit}>
                    <label>
                        Nombre
                        <input value={buyer.name} onChange={(e) => setBuyer({ ...buyer, name: e.target.value })} required />
                    </label>
                    <label>
                        Teléfono
                        <input value={buyer.phone} onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })} required />
                    </label>
                    <label>
                        Email
                        <input type="email" value={buyer.email} onChange={(e) => setBuyer({ ...buyer, email: e.target.value })} required />
                    </label>
                    <button className="btn" disabled={loading} type="submit">{loading ? "Procesando..." : "Confirmar compra"}</button>
                </form>
            )}
        </section>
    );
}