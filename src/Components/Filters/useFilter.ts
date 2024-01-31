import { ChangeEventHandler, FormEventHandler, useCallback, useState } from "react";
import { ProductFilters } from "../Products/getProducts";
import { cleanObject } from "../../helpers/cleanObject";

export interface Filters {
	available: boolean;
	min_price: string;
	max_price: string;
	stock_quantity: number | "";
}
interface useFilterProps {
	onSubmit: (filters: ProductFilters) => void
}

const parseFilters = (filters: Filters) => {
	return cleanObject(filters);
};

export function useFilter({onSubmit}: useFilterProps) {
	const [filters, setFilters] = useState<Filters>({
		available: true,
		min_price: "",
		max_price: "",
		stock_quantity: "",
	});

	const sendFilters = useCallback(() => {
		onSubmit(parseFilters(filters));
	}, [filters, onSubmit])

	const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback((event) => {
		event.preventDefault()
		sendFilters()
	}, [sendFilters]);

	const handleCheckChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			available: event.target.checked,
		}));
		sendFilters()
	};

	const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		const { name, value } = event.target;
		setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
	};

	return { handleSubmit, handleCheckChange, handleChange, filters };
}
