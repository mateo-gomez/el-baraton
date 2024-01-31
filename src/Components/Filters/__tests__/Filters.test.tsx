import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Filters } from "../Filters";

const initialFilter = {
	available: true,
	min_price: "",
	max_price: "",
	stock_quantity: "",
};

const onSubmit = vi.fn();

describe("Filters", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("Should render", () => {
		render(<Filters onSubmit={onSubmit}/>);

		expect(
			screen.getByRole("checkbox", { name: "Available" })
		).toBeInTheDocument();
		expect(
			screen.getByRole("textbox", { name: "Min price" })
		).toBeInTheDocument();
		expect(
			screen.getByRole("textbox", { name: "Max price" })
		).toBeInTheDocument();
		expect(
			screen.getByRole("spinbutton", { name: "Quantity" })
		).toBeInTheDocument();

		expect(screen.getByRole("button", { name: "Filter" })).toBeInTheDocument();
	});

	it("should submit form on check available field", async () => {
		render(<Filters onSubmit={onSubmit} />);

		const availableFilter = screen.getByRole("checkbox", { name: "Available" });

		await userEvent.click(availableFilter);

		expect(availableFilter).not.toBeChecked();
		expect(onSubmit).toBeCalledWith({
			available: true,
			min_price: "",
			max_price: "",
			stock_quantity: "",
		});
	});

	it.each([
		{
			filters: { available: true, },
			expected: {
				available: true,
				min_price: "",
				max_price: "",
				stock_quantity: "",
			},
		},
		{
			filters: { min_price: "1" },
			expected: {
				available: true,
				min_price: "1",
				max_price: "",
				stock_quantity: "",
			},
		},
		{
			filters: { max_price: "2" },
			expected: {
				available: true,
				min_price: "",
				max_price: "2",
				stock_quantity: "",
			},
		},
		{
			filters: { stock_quantity: "1" },
			expected: {
				available: true,
				min_price: "",
				max_price: "",
				stock_quantity: "1",
			},
		},
		{
			filters: {
				min_price: "2",
				max_price: "4",
				stock_quantity: "2",
			},
			expected: {
				available: true,
				min_price: "2",
				max_price: "4",
				stock_quantity: "2",
			},
		},
		{
			filters: {
				min_price: "2",
				max_price: "3",
				stock_quantity: "0",
			},
			expected: {
				available: true,
				min_price: "2",
				max_price: "3",
				stock_quantity: "0",
			},
		},
		{
			filters: {
				min_price: "2",
				max_price: "3",
				stock_quantity: "5",
			},
			expected: {
				available: true,
				min_price: "2",
				max_price: "3",
				stock_quantity: "5",
			},
		},
	])("should filter $expected", async ({ filters, expected }) => {
		render(<Filters onSubmit={onSubmit} />);

		const minPriceField = screen.getByRole("textbox", { name: "Min price" });
		const maxPriceField = screen.getByRole("textbox", { name: "Max price" });
		const quantityField = screen.getByRole("spinbutton", { name: "Quantity" });

		await userEvent.type(minPriceField, filters.min_price || "{backspace}");
		await userEvent.type(maxPriceField, filters.max_price || "{backspace}");
		await userEvent.type(quantityField, filters.stock_quantity || "{backspace}");

		await userEvent.click(screen.getByRole("button", { name: "Filter" }));

		expect(onSubmit).toBeCalledWith(initialFilter);
		expect(onSubmit).toBeCalledWith(expected);
	});
});
