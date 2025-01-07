import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers/reducer";
import { thunk } from "redux-thunk"; 

const myStore = createStore(reducer, applyMiddleware(thunk));

export default myStore;
    
export type AppStore = typeof myStore;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];