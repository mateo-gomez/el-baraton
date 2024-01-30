import products from '../../data/products.json'

export interface ProductFilters {
    available?: boolean
    min_price?: string
    max_price?: string
    quantity?: string
}

export interface Product {
    id: number
    name: string
    sublevel_id: number
    available: boolean
    price: string
    stock_quantity: number
}

export function getProducts(filters?: ProductFilters): Product[] {
    if (filters) {
        return products.products
    }

	return products.products;
}
