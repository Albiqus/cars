import { createStore, combineReducers } from "redux";


let reducers = combineReducers({

})

let store = createStore(reducers)

export { store }
export type RootState = ReturnType<typeof store.getState>