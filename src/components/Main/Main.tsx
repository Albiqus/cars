import { getVehicles } from "../../thunks/getVehicles";
import { Content } from "./Content/Content";
import { Div } from "./Main-styles"
import { useEffect, } from 'react';
import { useDispatch } from 'react-redux'
import { SortingPanel } from "./SortingPanel/SortingPanel";


export const Main = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        getVehicles(dispatch)
    }, [])

    return (
        <Div>
            <SortingPanel />
            <Content/>
        </Div>
    )
}