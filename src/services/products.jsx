import { products } from "../data/products";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export async function fetchProducts(categoryId) {
    await delay(500);
    if (!categoryId || categoryId === "all") return products;
    return products.filter((p) => p.category === categoryId);
}

export async function fetchProductById(id) {
    await delay(500);
    return products.find((p) => p.id === id);
}
