const redux = require("redux")

const createStore = redux.createStore

const CAKE_ORDERED = "CAKE_ORDERED"
const BUY_CAKE = "BUY_CAKE"

function orderCake(){
    return {
        type: CAKE_ORDERED,
        quantity:1,
    }
}

function buyCake(){
    return{
        type:BUY_CAKE,
        quantity:1,
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
                numOfCakes: state.numOfCakes-1,
            }
            // break;
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes:state.numOfCakes+1,
            }
            // break
        default:
            return state
    }
}
const store = createStore(reducer)

console.log("initial state", store.getState())
const unsubscribe = store.subscribe(()=>console.log("Updated State:",store.getState()))
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(buyCake())
unsubscribe()
store.dispatch(orderCake())
