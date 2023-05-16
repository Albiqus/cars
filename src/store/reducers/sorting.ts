import { SET_GRADATION, SET_SORT_MODE } from "../../data/actionTypes";


const startState = {
    sortMode: 'all',
    gradation: 'increase',
}

export const sorting = (state = startState, action: any) => {
    switch (action.type) {
        case SET_SORT_MODE: {
            return {
                ...state,
                sortMode: action.payload,
                gradation: action.payload === 'all' ? 'increase' : state.gradation
            }
        }
        case SET_GRADATION: {
            return {
                ...state,
                gradation: action.payload
            }
        }
        default:
            return state;
    }
}