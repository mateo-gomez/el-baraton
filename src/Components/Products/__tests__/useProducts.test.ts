import { renderHook, waitFor } from "@testing-library/react";
import { useProducts } from "../useProducts";
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

describe("useProducts", () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	it("should return products on render", () => {
		const getProductsMock = vi
			.spyOn(productsApi, "getProducts")
			.mockImplementation(() => availableProducts);

		renderHook(useProducts);

		expect(getProductsMock).not.toBeCalled();
	});

	it("should call getProducts on call refetch", async () => {
		const getProductsMock = vi.spyOn(productsApi, "getProducts");
		const { result } = renderHook(useProducts);

		await waitFor(() => result.current.refetch({ available: false }));

		await waitFor(() =>
			result.current.refetch({ available: true, min_price: "2.00" })
		);

		expect(getProductsMock).toBeCalledTimes(2);
		expect(getProductsMock).toBeCalledWith({ available: false });
		expect(getProductsMock).toBeCalledWith({
			available: true,
			min_price: "2.00",
		});
	});
});
