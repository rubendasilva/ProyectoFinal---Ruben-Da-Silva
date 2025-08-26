import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div style={{ padding: "20px" }}>
            <h2>404 - Página no encontrada</h2>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
}
