import {expect} from 'vitest'
import {render, screen } from '@testing-library/react'
import { Category } from '../Category'

const categoryMock = {
    "id": 1,
    "name": "Bebidas",
    "sublevels": [
        {
            "id": 2,
            "name": "Con azúcar",
            "sublevels": [
                {
                    "id": 4,
                    "name": "Refrescos"
                },
                {
                    "id": 5,
                    "name": "Jugos",
                    "sublevels": [
                        {
                            "id": 8,
                            "name": "Naturales"
                        },
                        {
                            "id": 9,
                            "name": "Concentrados"
                        }
                    ]
                }
            ]
        },
    ]
}

describe('Categories', () => {
    it('should render', () => {
        render(<Category name={categoryMock.name} sublevels={categoryMock.sublevels} />)

        expect(screen.getByText('Bebidas')).toBeInTheDocument()
        expect(screen.getByText('Con azúcar')).toBeInTheDocument()
        expect(screen.getByText('Jugos')).toBeInTheDocument()
        expect(screen.getByText('Refrescos')).toBeInTheDocument()
        expect(screen.getByText('Naturales')).toBeInTheDocument()
        expect(screen.getByText('Concentrados')).toBeInTheDocument()
    })
})