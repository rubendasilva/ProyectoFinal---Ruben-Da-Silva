import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebase";


const sample = [
    { id: "aus-sydney", title: "Australia - Sydney 7 noches", price: 1499, stock: 12, category: "oceania", thumbnail: "https://images.unsplash.com/photo-1506976785307-8732e854ad75?w=1200", description: "Paquete a Sydney con vuelos y hotel." },
    { id: "asia-tokyo", title: "Asia - Tokyo 10 noches", price: 1999, stock: 8, category: "asia", thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200", description: "Descubrí Tokyo con city tour y transporte." },
    { id: "amer-brasil", title: "Brasil - Río 5 noches", price: 1090, stock: 20, category: "america", thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200", description: "Río de Janeiro con aéreos y hotel 3*." }
];


export async function seedProductsOnce() {
    const ref = collection(db, "products");
    const snap = await getDocs(ref);
    if (!snap.empty) return;
    await Promise.all(sample.map((p) => setDoc(doc(db, "products", p.id), p)));
}