const redux = require("redux")
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const createStore = redux.createStore

const CAKE_ORDERED = "CAKE_ORDERED"
const BUY_CAKE = "BUY_CAKE"
const ORDER_ICECREAM = "ORDER_ICECREAM"
const BUY_ICECREAM = "BUY_ICECREAM"

function orderCake(){
    return {
        type: CAKE_ORDERED,
        payload:1,
    }
}

function buyCake(payload=2){
    return{
        type:BUY_CAKE,
        payload:payload,
    }
}

function orderIceCream(payload=1){
    return {
        type: ORDER_ICECREAM,
        payload:payload,
    }
}

function buyIceCream(payload=1){
    return {
        type: BUY_ICECREAM,
        payload:payload,
    }
}

const initialCakeState = {
    numOfCakes:10,
}
const initialIceCreamState={
    numOfIceCream:12
}

const iceCreamReducer = (state=initialIceCreamState,action)=>{
    switch(action.type){
        case ORDER_ICECREAM:
            return{
                ...state,
                numOfIceCream:state.numOfIceCream-action.payload
            }
        case BUY_ICECREAM:
            return{
                ...state,
                numOfIceCream:state.numOfIceCream+action.payload
            }
        default:
            return state

    }
}

const cakeReducer = (state=initialCakeState,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes: state.numOfCakes-action.payload,
            }
            // break;
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes:state.numOfCakes+action.payload,
            }
            // break
        default:
            return state
    }
}

// const reducer = (state=initialState,action)=>{
//     switch(action.type){
//         case CAKE_ORDERED:
//             return{
//                 ...state,
//                 numOfCakes: state.numOfCakes-action.payload,
//             }
//             // break;
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numOfCakes:state.numOfCakes+action.payload,
//             }
//             // break
//         case ORDER_ICECREAM:
//             return{
//                 ...state,
//                 numOfIceCream:state.numOfIceCream-action.payload
//             }
//         case BUY_ICECREAM:
//             return{
//                 ...state,
//                 numOfIceCream:state.numOfIceCream+action.payload
//             }
//         default:
//             return state
//     }
// }

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,

})
const store = createStore(rootReducer)

console.log("initial state", store.getState())
const unsubscribe = store.subscribe(()=>console.log("Updated State:",store.getState()))
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(buyCake())

const actions = bindActionCreators({orderCake,buyCake,orderIceCream,buyIceCream},store.dispatch)
actions.orderCake()
actions.orderCake()
actions.buyCake()
actions.orderIceCream()
actions.orderIceCream()
actions.buyIceCream()
unsubscribe()
store.dispatch(orderCake())
