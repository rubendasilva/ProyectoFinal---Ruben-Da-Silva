import ItemCount from "./ItemCount";

export default function ItemDetail({ item }) {
    if (!item) return null;

    const handleImgError = (e) => {
        e.currentTarget.src = "/img/placeholder.png";
    };

    return (
        <section className="container main detail">
            <div className="detail-media">
                <img
                    src={item.img}
                    alt={item.title}
                    onError={handleImgError}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            </div>
            <div className="detail-body">
                <span className="badge">Stock: {item.stock}</span>
                <h2 style={{ margin: 0 }}>{item.title}</h2>
                <p>{item.description}</p>
                <p><b>Precio:</b> ${item.price}</p>
                <ItemCount
                    stock={item.stock}
                    initial={1}
                    onAdd={(q) => console.log("Agregar", item.id, q)}
                />
            </div>
        </section>
    );
}
