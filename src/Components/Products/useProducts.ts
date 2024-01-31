import { useEffect, useState } from "react"
import { Product, ProductFilters, getProducts } from "./getProducts"

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([])
    const [shouldRefetch, setShouldRefetch] = useState(false)
    const [filters, setFilters] = useState<ProductFilters>({})

    const doFetch = (filters: ProductFilters = {}) => {
        setFilters(filters)
        setShouldRefetch(true)
    }

    useEffect(() => {
        if (shouldRefetch) {
            setProducts(getProducts(filters))
            setShouldRefetch(false)
        }
    }, [shouldRefetch, filters])

    return {products, refetch: doFetch}
}