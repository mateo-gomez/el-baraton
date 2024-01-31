import { Product, ProductFilters } from "../Components/Products/getProducts"

export const filterProducts = (products: Product[], filters?: ProductFilters) => products.filter(product => {
    let exists = true

    if (!filters) return exists

    if ('available' in filters) {
        exists = exists && product.available === filters.available
    }

    if ('min_price' in filters && filters.min_price) {
        exists = exists && product.price >= filters.min_price
    }

    if ('max_price' in filters && filters.max_price) {
        exists = exists && product.price <= filters.max_price
    }

    if ('stock_quantity' in filters && filters.stock_quantity !== undefined) {
        exists = exists && product.stock_quantity === Number(filters.stock_quantity)
    }

    return exists
})
