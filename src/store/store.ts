import { vehicles } from './reducers/vehicles';
import { createStore, combineReducers } from "redux";


let reducers = combineReducers({
    vehicles,
})

let store = createStore(reducers)

export { store }
export type RootState = ReturnType<typeof store.getState>