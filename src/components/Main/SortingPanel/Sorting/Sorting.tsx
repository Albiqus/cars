import { useDispatch } from "react-redux"
import { setSortMode } from "../../../../actionCreators/sorting/setSortMode"
import { Div, Option, Select, SelectWrapper, } from "./Sorting-styles"


export const Sorting = () => {

    const dispatch = useDispatch()

    const onSortingChange = (e: any) => {
        dispatch(setSortMode(e.target.value))
    }

    return (
        <Div>
            <SelectWrapper>
                <Select onChange={onSortingChange}>
                    <Option value='all'>без сортировки</Option>
                    <Option value='year'>год</Option>
                    <Option value='price'>цена</Option>
                </Select>
            </SelectWrapper>
        </Div>
    )
}