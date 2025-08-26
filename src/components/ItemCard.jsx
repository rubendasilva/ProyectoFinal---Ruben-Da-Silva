import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
    return (
        <article className="card">
            <div className="card-media">
                <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-price">${item.price}</p>
                <Link to={`/item/${item.id}`} className="btn">Ver detalle</Link>
            </div>
        </article>
    );
}
