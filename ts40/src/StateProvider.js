import React from 'react'
import StateConsumer from '.'
const MyContext= React.createContext()
export default function StateProvider() {
    const [count,setCount]=useState(0);
    const [number,setNumber]=useState(100);
  return (
    <div>
        <MyContext.Provider value="">
            <StateConsumer/>
        </MyContext.Provider>
    </div>
  )
}
export {MyContext}
