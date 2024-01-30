import { render, screen } from "@testing-library/react";
import { Products } from "../Products";
import * as productsApi from "../getProducts";

const availableProducts = [
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
];

vi.spyOn(productsApi, "getProducts").mockImplementation(
	() => availableProducts
);

describe("Products", () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	it("should render", () => {
		render(<Products />);

		expect(screen.getByText("Jugo de uva")).toBeInTheDocument();
		expect(screen.getByText("price: $1.00")).toBeInTheDocument();
		expect(screen.getByText("quantity: 1")).toBeInTheDocument();
		expect(screen.getByText("Jugo de maracuyá")).toBeInTheDocument();
		expect(screen.getByText("price: $2.00")).toBeInTheDocument();
		expect(screen.getByText("quantity: 2")).toBeInTheDocument();
	});
});
