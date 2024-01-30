import { render, screen } from "@testing-library/react"
import { Categories } from "../Categories"
import * as hooks from '../useCategories'

vi.spyOn(hooks, 'useCategories').mockImplementation(() => ({categories: [{id: 1, name: 'Category A'}, {id: 1, name: 'Category B', sublevels: [{id: 1, name: 'Subcategory'}]}]}))

describe('Categories', () => {
    it('Should render', () => {
        render(<Categories />)

        expect(screen.getByText('Category A')).toBeInTheDocument()
        expect(screen.getByText('Category B')).toBeInTheDocument()
        expect(screen.getByText('Subcategory')).toBeInTheDocument()
    })
})