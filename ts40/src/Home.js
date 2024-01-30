import React from 'react'
export default function 
() {
  const head={fontSize:'90px',color:'chocolate',textAlign:'center',margin:'0px'};
  const imgstyle={height:'200px',margin:'0 400px '}
  const btn={
    padding: '8px',
    backgroundColor: '#5cff67',
    borderRadius: '10px',
    textAlign: 'center',
    fontSize: '20px',
    color:'black',
    margin:'25px 600px',

}
  return (
    <div style={{backgroundColor:'yellow'}}>
    <h1 style={head}>PokeApi</h1> 
    <h1 style={{textAlign:'center'}}>Know the Stats of Your Favorite Pokemon</h1>
    <img style={imgstyle} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png'></img>
    <button style={btn}> Search Pokemons</button>
    </div>
  )
}
