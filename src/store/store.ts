import { sorting } from './reducers/sorting';
import { content } from './reducers/content';
import { createStore, combineReducers } from "redux";


let reducers = combineReducers({
    content,
    sorting
})

let store = createStore(reducers)

export { store }
export type RootState = ReturnType<typeof store.getState>