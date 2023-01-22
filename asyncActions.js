const redux = require("redux")
const applyMiddleware = redux.applyMiddleware
const createStore = redux.createStore
const thunkMiddleware = require("redux-thunk").default
const axios = require("axios")


initialState = {
    loading:true,
    users:[],
    error:"",
}

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"

const fetchUsersRequest = ()=>{
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = (users)=>{
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error =>{
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading:false,
                users:action.payload,
                error:""
            }
        case FETCH_USERS_FAILURE:
            return{
                loading:true,
                users:[],
                error:action.payload,
            }
    }
}

const fetchUsers = ()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get("https://jsonplaceholder.typicode.com/users2")
        .then(res=>{
            // response.data is the array of users
            const users = res.data.map(user=>user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error=>{
            // error.message gives the description of the error.
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const store = createStore(reducer,applyMiddleware(thunkMiddleware))
const unsubscribe = store.subscribe(()=>{console.log("Current State",store.getState())})
store.dispatch(fetchUsers())