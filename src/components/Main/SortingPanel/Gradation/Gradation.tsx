import { useDispatch } from "react-redux"
import { Div, Option, Select, SelectWrapper, } from "./Gradation-styles"
import { setGradation } from "../../../../actionCreators/sorting/setGradation"


export const Gradation = () => {

    const dispatch = useDispatch()

    const onSortingChange = (e: any) => {
        dispatch(setGradation(e.target.value))
    }

    return (
        <Div>
            <SelectWrapper>
                <Select onChange={onSortingChange}>
                    <Option  value='increase'>по возрастанию</Option>
                    <Option  value='decrease'>по убыванию</Option>
                </Select>
            </SelectWrapper>
        </Div>
    )
}