import { Link } from "react-router-dom";

export default function Item({ id, title, price, thumbnail }) {
    function srcFor(thumbnail) {
        if (!thumbnail) return "";
        return thumbnail.startsWith("http") ? thumbnail : process.env.PUBLIC_URL + thumbnail;
    }

    return (
        <article className="item-card">
            <div className="item-media">
                <img src={srcFor(thumbnail)} alt={title} />
            </div>
            <div className="item-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-price">${price}</p>
                <div className="card-actions">
                    <Link to={`/item/${id}`} className="btn">Ver detalle</Link>
                </div>
            </div>
        </article>
    );
}
