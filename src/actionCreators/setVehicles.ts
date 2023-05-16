import { SET_VEHICLES } from "../data/actionTypes"


export const setVehicles = (vehicles: any) => {
    return {
        type: SET_VEHICLES,
        payload: vehicles
    }
}