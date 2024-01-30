import React from 'react'
import {name} from '../../App'
export default function Comp1() {
  return (
    <div>
        <name.Consumer>
            {(fName)=>{
                return(
                    <lastName.Consumer>
                        {(lName)=>{
                            
                        }}
                    <div>
                        <h1>i am {fName} </h1>
                    </div>
                )
            }}
        </name.Consumer>
    </div>
  )
}
