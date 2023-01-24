import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux'

const HooksIceCreamContainer = () => {
    const {numOfIceCream} =  useSelector(state=>state.iceCream)
    const dispatch = useDispatch()

  return (
    <div>
        <h2>HooksIceCreamContainer {numOfIceCream}</h2>
        <button onClick={()=>dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  )
}

export default HooksIceCreamContainer