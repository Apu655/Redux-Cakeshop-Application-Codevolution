const redux = require("redux")
const bindActionCreators = redux.bindActionCreators
const createStore = redux.createStore

const CAKE_ORDERED = "CAKE_ORDERED"
const BUY_CAKE = "BUY_CAKE"

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

const initialState = {
    numOfCakes:10,
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes: state.numOfCakes-action.payload,
            }
            // break;
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes:state.numOfCakes+action.payload,
            }
            // break
        default:
            return state
    }
}
const store = createStore(reducer)

console.log("initial state", store.getState())
const unsubscribe = store.subscribe(()=>console.log("Updated State:",store.getState()))
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(buyCake())

const actions = bindActionCreators({orderCake,buyCake},store.dispatch)
actions.orderCake()
actions.orderCake()
actions.buyCake()
unsubscribe()
store.dispatch(orderCake())
