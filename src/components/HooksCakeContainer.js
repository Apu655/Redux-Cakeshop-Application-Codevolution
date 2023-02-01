import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {buyCake} from "../redux"
const HooksCakeContainer = () => {
    const {numOfCakes} = useSelector((state)=>state.cake)
    const dispatch = useDispatch()
    const [cakeNum,setCakeNum] = useState(1)
  return (
    <div>
      <input type='text' onChange={(e)=>setCakeNum(parseInt(e.target.value)) } value={cakeNum}/>
        <h2>Num of cakes - {numOfCakes} </h2>
        <button onClick={()=>dispatch(buyCake(cakeNum))}>Buy Cake {cakeNum} cakes</button>
    </div>
  )
}

export default HooksCakeContainer