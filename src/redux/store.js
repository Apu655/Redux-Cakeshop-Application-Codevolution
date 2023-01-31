import {createStore,applyMiddleware} from "redux"
import rootReducer from "./rootReducer";
import logger from 'redux-logger'


console.log("Store is working")
const store = createStore(rootReducer,applyMiddleware(logger))

export default store;