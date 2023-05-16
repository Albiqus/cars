import { getVehicles } from "../../thunks/getVehicles";
import { Content } from "./Content/Content";
import { Div } from "./Main-styles"
import { useEffect, } from 'react';
import { useDispatch } from 'react-redux'
import { Sorting } from "./Sorting/Sorting";


export const Main = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        getVehicles(dispatch)
    }, [])

    return (
        <Div>
            <Sorting/>
            <Content/>
        </Div>
    )
}