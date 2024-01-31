import { filterProducts } from "../filterProducts"

const productsMock = [
	{
		id: 1,
		price: "1.00",
		name: "Jugo de uva",
		available: true,
		stock_quantity: 1,
		sublevel_id: 1,
	},
	{
		id: 2,
		price: "2.00",
		name: "Jugo de maracuyá",
		available: true,
		stock_quantity: 2,
		sublevel_id: 1,
	},
    {
		id: 3,
		price: "6.00",
		name: "Jugo de pera",
		available: false,
		stock_quantity: 0,
		sublevel_id: 1,
	},
];

describe('filterProducts', () => {
	it('should return all products', () => {
		expect(filterProducts(productsMock)).toHaveLength(3)
	})

    it('should filter products by available', () => {
        expect(filterProducts(productsMock, { available: true })).toHaveLength(2)
        expect(filterProducts(productsMock, { available: false })).toHaveLength(1)
    })

    it('should filter products by price', () => {
		expect(filterProducts(productsMock, { min_price: "6.00" })).toHaveLength(1)
        expect(filterProducts(productsMock, { max_price: "3.00" })).toHaveLength(2)
        expect(filterProducts(productsMock, { min_price: '2.00', max_price: "8.00" })).toHaveLength(2)
    })

	it('should filter products by stock_quantity', () => {
		expect(filterProducts(productsMock, { stock_quantity: "0" })).toHaveLength(1)
		expect(filterProducts(productsMock, { stock_quantity: "2" })).toHaveLength(1)
	})
})