import { ProductFilters } from "../Products/getProducts";
import { useFilter } from "./useFilter";

interface FiltersProps {
	onSubmit: (filters: ProductFilters) => void
}

export function Filters({onSubmit}: FiltersProps) {
	const { handleSubmit, handleCheckChange, handleChange, filters } =
		useFilter({onSubmit});

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Available
				<input
					type="checkbox"
					name="available"
					onChange={handleCheckChange}
					checked={filters.available}
					value={"available"}
				/>
			</label>
			<label>
				Min price
				<input
					type="text"
					name="min_price"
					onChange={handleChange}
					value={filters.min_price}
				/>
			</label>
			<label>
				Max price
				<input
					type="text"
					name="max_price"
					onChange={handleChange}
					value={filters.max_price}
				/>
			</label>
			<label>
				Quantity
				<input
					type="number"
					name="quantity"
					onChange={handleChange}
					value={filters.quantity}
				/>
			</label>

			<button type="submit">Filter</button>
		</form>
	);
}
