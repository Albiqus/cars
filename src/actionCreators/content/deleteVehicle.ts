import { DELETE_VEHICLE } from "../../data/actionTypes"


export const deleteVehicle = (id: number) => {
    return {
        type: DELETE_VEHICLE,
        payload: id
    }
}