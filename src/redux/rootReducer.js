import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import IceCreamReducer from "./iceCreams/iceCreamReducer";

const rootReducer =  combineReducers({
    cake:cakeReducer,
    iceCream:IceCreamReducer
})

export default rootReducer