const redux = require("redux")
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const createStore = redux.createStore
const reduxLogger = require("redux-logger")
const logger = reduxLogger.createLogger()



const CAKE_ORDERED = "CAKE_ORDERED"
const BUY_CAKE = "BUY_CAKE"
const ORDER_ICECREAM = "ORDER_ICECREAM"
const BUY_ICECREAM = "BUY_ICECREAM"


function orderCake(){
    return {
        type:CAKE_ORDERED,
        payload:2,
    }
}

function buyCake(){
    return{
        type:BUY_CAKE,
        payload:2,
    }
}

const initialState={
    numOfCakes:10
}

function orderCakeReducer(state = initialState,action){
    switch (action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes+action.payload
            }
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes:state.numOfCakes-action.payload
            }
        default:
            return state
    }
}

const store = createStore(orderCakeReducer, applyMiddleware(logger))
const unsubscribe = store.subscribe(()=>{})
console.log("Initial State :", store.getState())
store.dispatch(orderCake())
store.dispatch(buyCake())


