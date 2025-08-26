import { useState } from "react";

export default function ItemCount({ stock, initial, onAdd }) {
    const [qty, setQty] = useState(initial);

    return (
        <div>
            <button onClick={() => setQty(qty > 1 ? qty - 1 : qty)}>-</button>
            <span style={{ margin: "0 10px" }}>{qty}</span>
            <button onClick={() => setQty(qty < stock ? qty + 1 : qty)}>+</button>
            <button onClick={() => onAdd(qty)}>Agregar</button>
        </div>
    );
}
