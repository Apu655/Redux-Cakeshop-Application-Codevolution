import React from 'react'
import {buyIceCream,buyCake} from "../redux"
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'

const IceCreamContainer = (props) => {
  return (
    <div>
        <h2>Number of Ice Cream in this state: {props.iceCream.numOfIceCream}</h2>
        <button onClick={()=>props.iceCream.buyIceCream()}>Buy Ice Cream</button>
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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (IceCreamContainer)
// export default IceCreamContainer