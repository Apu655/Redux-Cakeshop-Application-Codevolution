import {createStore,applyMiddleware} from "redux"
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'


console.log("Store is working")
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))

export default store;