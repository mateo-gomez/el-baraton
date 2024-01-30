import { Filters } from "../Filters/Filters";
import { useProducts } from "./useProducts"

export function Products() {
    const {products, refetch} = useProducts()

    return (
			<div>
				<Filters onSubmit={refetch} />
				{products.map((product) => (
					<article key={product.id}>
						<h2>{product.name}</h2>
						<ul>
							<li>price: ${product.price}</li>
							<li>quantity: {product.stock_quantity}</li>
						</ul>
					</article>
				))}
			</div>
		);
}