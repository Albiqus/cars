import { SET_SORT_MODE } from "../../data/actionTypes"


export const setSortMode = (mode: string) => {
    return {
        type: SET_SORT_MODE,
        payload: mode
    }
}