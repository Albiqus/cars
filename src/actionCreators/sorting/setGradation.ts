import { SET_GRADATION } from "../../data/actionTypes"


export const setGradation = (mode: string) => {
    return {
        type: SET_GRADATION,
        payload: mode
    }
}