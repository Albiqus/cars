import { CHANGE_VEHICLE, DELETE_VEHICLE, SET_VEHICLES } from "../../data/actionTypes";
import { Vehicle } from "../../types/Vehicle";


const startState = {
    vehicles: [],
}

export const content = (state = startState, action: any) => {
    switch (action.type) {
        case SET_VEHICLES: {
            return {
                ...state,
                vehicles: action.payload
            }
        }
        case CHANGE_VEHICLE: {
            const newVehickes = [...state.vehicles].map((vehicle: Vehicle) => {
                if (vehicle.id !== action.payload.id) return vehicle
                return {
                    ...vehicle,
                    name: action.payload.name,
                    price: action.payload.price,
                    model: action.payload.model
                }
            })
            return {
                ...state,
                vehicles: newVehickes
            }
        }
        case DELETE_VEHICLE: {
            return {
                ...state,
                vehicles: state.vehicles.filter((vehicle: Vehicle) => vehicle.id !== action.payload)
            }
        }
        default:
            return state;
    }
}