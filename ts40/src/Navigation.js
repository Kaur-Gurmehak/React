import React from 'react'
import {NavLink} from 'react-router-dom'
import '../Styles/Navigation.css'
export default function Navigation() {
  return (
    <div className='navbar'>
        <ul className='navlist'>
            <li>
               <p className='logo'>Home</p>
            </li>
            <li>
               <NavLink to="/"><p className='navitem'>Home</p></NavLink> 
            </li>
            <li>
               <NavLink to="/Pokemons"><p className='navitem'>Pokemons</p></NavLink> 
            </li>
            <li>
               <NavLink to="/Search"><p className='navitem'>Search</p></NavLink> 
            </li>
            
        </ul>
    </div>
  )
}