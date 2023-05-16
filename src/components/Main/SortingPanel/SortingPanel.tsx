import { useSelector } from "react-redux";
import { Gradation } from "./Gradation/Gradation"
import { Sorting } from "./Sorting/Sorting"
import { Div } from "./SortingPanel-styles"
import { RootState } from "../../../store/store";


export const SortingPanel = () => {

    const { sortMode } = useSelector((state: RootState) => state.sorting);
    
    return (
        <Div>
            <Sorting />
            {sortMode !== 'all' && <Gradation />}
        </Div>
    )
}