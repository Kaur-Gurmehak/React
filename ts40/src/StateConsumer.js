import React from 'react'
import { MyContext } from './StateProvider'
export default function StateConsumer() {
  return (
    <div>
        <MyContext.Consumer>
            {({count,setCount,number,setNumber})=>{
                return(
                    <div>
                        
                        
                    </div>
                )
            }}
        </MyContext.Consumer>
    </div>
  )
}
