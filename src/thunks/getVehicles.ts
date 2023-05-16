import axios from "axios"
import { setVehicles } from "../actionCreators/setVehicles"


export const getVehicles = (dispatch: any) => {
    return axios({
        method: 'get',
        url: `https://test.tspb.su/test-task/vehicles`,
    })
        .then(function (response) {
            dispatch(setVehicles(response.data))
        })

}