import React from 'react'
import {buyIceCream} from "../redux/index"
import { useDispatch, useSelector } from 'react-redux'
// import { connect } from 'react-redux'

const IceCreamContainer = (props) => {
    const state = useSelector(state=>state)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of Ice Cream in this state: {state.iceCream.numOfCakes}</h2>
        <button onClick={()=>dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return {
        numOfCakes:state.numOfCakes
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        buyCake:()=>dispatch(buyCake())
        // d:"Hello"
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (CakeContainer)
export default IceCreamContainer