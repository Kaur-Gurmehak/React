import React from 'react'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'

export default function Mainapp() {
  return (
    <div>
         <Navigation/>
         <Outlet/>
    </div>
   
  )
}
