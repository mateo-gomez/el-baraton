import products from '../../data/products.json'
import { filterProducts } from '../../helpers/filterProducts'

export interface ProductFilters {
    available?: boolean
    min_price?: string
    max_price?: string
    stock_quantity?: string
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
	return filterProducts(products.products, filters);
}
