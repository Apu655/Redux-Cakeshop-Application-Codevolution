import React from 'react'
import {buyCake} from "../redux/index"
import { connect } from 'react-redux'

const CakeContainer = (props) => {
    console.log("Hello")
  return (
    <div>
        <h2>Number of cakes in this state: {props.cake.numOfCakes}</h2>
        <button onClick={()=>props.cake.buyCake()}>Buy Cake</button>
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
// export default CakeContainer