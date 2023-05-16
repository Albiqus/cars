import { CHANGE_VEHICLE } from "../../data/actionTypes"


export const changeVehicle = (name: string, model: string, price: string, id: number) => {
    return {
        type: CHANGE_VEHICLE,
        payload: { name, model, price, id }
    }
}