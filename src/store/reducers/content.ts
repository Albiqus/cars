import { SET_VEHICLES } from "../../data/actionTypes";


const startState = {
    vehicles: null,
}

export const content = (state = startState, action: any) => {
    switch (action.type) {
        case SET_VEHICLES: {
            return {
                ...state,
                vehicles: action.payload
            }
        }
        default:
            return state;
    }
}