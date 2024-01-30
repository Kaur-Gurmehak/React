import React,{createContext, usestate} from 'react'
const UserContext = createContext()
export default function UserProvider({children}) {
    const [user,setUser]=useState(null);
    const signUp=(userInfo)=>{
        setUser(userInfo)
    }
  return (
    <UserContext.Provider value ={{user,setUser,signUp}}>
     {children} 
    </UserContext.Provider>
  )
}
export {UserContext}
