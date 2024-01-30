import React from 'react'
import './Pokemon.css'
import Home from './Home';
import Mainapp from './Mainapp';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Pokemondata from './Pokemondata';
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainapp/>}>
      <Route index element={<Home/>}/>
      <Route path='/Pokemons' element={<Pokemondata/>}/>
      <Route path='/Search' element={<Home/>}/>
      </Route>
    </Routes>
    </BrowserRouter>

 
    </>
  )
}