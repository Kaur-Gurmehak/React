import React from 'react'
const reducerFunction=(state,action)=>{
    console.log(state,action)
    switch(action.type){
    case "red":
        return {color:action.payload}
    default:
        return state;
    }
  }
function Background() {
  return (
    <div>
      <div style={{backgroundColor: state.color, width:"300px", height:"300px",border:"2px solid"}}>Hello</div>
      <button onClick={()=>dispatch({type:"red",payload:"red"})}>Red</button>
      <button onClick={()=>dispatch({type:"black",payload:"black"})}>Black</button>
      <button onClick={()=>dispatch({type:"green",payload:"green"})}>Green</button>
      <button onClick={()=>dispatch({type:"pink",payload:"pink"})}>Pink</button>
      <button onClick={()=>dispatch({type:"orange",payload:"orange"})}>Orange</button>
    </div>
  )
}

export default Background