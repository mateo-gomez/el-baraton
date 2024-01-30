import { Category } from '../Category/Category'
import { useCategories } from './useCategories'

export function Categories () {
    const {categories} = useCategories()

    return <div>
        {categories.map(({id, name, sublevels}) => <Category key={id} name={name} sublevels={sublevels}   />)}
    </div>
}