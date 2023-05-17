import { SET_VEHICLES } from "../../data/actionTypes"
import { Vehicle } from "../../types/Vehicle"


export const setVehicles = (vehicles: Vehicle[]) => {
    return {
        type: SET_VEHICLES,
        payload: vehicles
    }
}