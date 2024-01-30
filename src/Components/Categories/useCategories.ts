import categories from '../../data/categories.json'
import { Category } from '../Category/Category'

export function getCategories(): Category[] {
    return categories.categories
}

export function useCategories() {
    const categories = getCategories()

    return {categories}
}