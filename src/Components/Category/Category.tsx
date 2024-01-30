export interface Sublevel {
    id: number
    name: string
    sublevels?: Sublevel[]
}

export interface Category {
    id: number
    name: string
    sublevels?: Sublevel[]
}

interface CategoryProps {
    name: string
    sublevels?: Sublevel[]
}

interface SublevelProps {
    name: string
}

function Sublevel ({name}: SublevelProps) {
    return <p>{name}</p>
}

export function Category({name, sublevels}: CategoryProps) {
    return sublevels ? (
			<details>
				<summary>{name}</summary>
				{sublevels?.map((sublevel) => (
					<Category
						key={sublevel.id}
						name={sublevel.name}
						sublevels={sublevel.sublevels}
					/>
				))}
			</details>
		) : (
			<Sublevel name={name} />
		);
}