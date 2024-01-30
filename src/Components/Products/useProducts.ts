import { getProducts } from "./getProducts"

export function useProducts() {
    const products = getProducts()
    return {products, refetch: getProducts}
}