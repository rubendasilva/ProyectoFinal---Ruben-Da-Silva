import { createContext, useContext, useMemo, useState } from "react";


const CartContext = createContext();


export function CartProvider({ children }) {
    const [items, setItems] = useState([]); // {id, title, price, qty, stock, thumbnail}


    const totalQty = useMemo(() => items.reduce((acc, it) => acc + it.qty, 0), [items]);
    const totalPrice = useMemo(() => items.reduce((acc, it) => acc + it.qty * it.price, 0), [items]);


    function addItem(product, qty) {
        setItems((prev) => {
            const exists = prev.find((p) => p.id === product.id);
            if (exists) {
                return prev.map((p) => (p.id === product.id ? { ...p, qty: Math.min(p.qty + qty, p.stock) } : p));
            }
            return [...prev, { ...product, qty }];
        });
    }
    function removeItem(id) { setItems((prev) => prev.filter((p) => p.id !== id)); }
    function clearCart() { setItems([]); }
    function isInCart(id) { return items.some((p) => p.id === id); }


    const value = { items, addItem, removeItem, clearCart, isInCart, totalQty, totalPrice };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}


export function useCart() { return useContext(CartContext); }