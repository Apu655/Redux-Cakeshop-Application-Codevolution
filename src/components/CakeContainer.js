import React from 'react'
import {buyCake} from "../redux/index"
import { connect } from 'react-redux'

const CakeContainer = (props) => {
  return (
    <div>
        <h2>Number of cakes in this state: {props.numOfCakes}</h2>
        <button onClick={()=>props.buyCake()}>Buy Cake</button>
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