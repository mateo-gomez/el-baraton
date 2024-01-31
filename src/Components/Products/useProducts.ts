import { useCallback, useEffect, useState } from "react"
import { Product, ProductFilters, getProducts } from "./getProducts"

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([])
    const [shouldRefetch, setShouldRefetch] = useState(true)
    const [filters, setFilters] = useState<ProductFilters>({})

    const doFetch = useCallback((filters: ProductFilters = {}) => {
        setFilters(filters)
        setShouldRefetch(true)
    }, [])

    useEffect(() => {
        if (shouldRefetch) {
            setProducts(getProducts(filters))
            setShouldRefetch(false)
        }
    }, [shouldRefetch, filters])

    return {products, refetch: doFetch}
}