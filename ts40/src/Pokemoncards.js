import React, { useState, useEffect } from 'react';

export default function Pokemoncards({name,page}) {
  const [data,setData]=useState({name:{name},img:'',height:0,weight:0,id:0});
  const [more,setMore]=useState(false);
  useEffect(()=>{
    const fetchData=async()=>{
      const data=await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const response=await data.json();
      console.log(response)
      setData((prev)=>({...prev,
        img:response.sprites.other.dream_world.front_default,
        height:response.height,
        weight:response.weight,
        id:response.id}));
    };
    fetchData();
  }, [{page}]); 

  const Knowmore=()=>{
    setMore(true);
  };
  return (
    <div className='main'>
      <div className='card'>
        <div className='inner'>
          <h2>#{data.id}</h2>
          <img className='img' src={data.img?data.img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png'} alt={''} />
          <h2>{name}</h2>
        </div>
        <button className='btn' onClick={Knowmore}>Know More</button>
      </div>
      {more && (
        <div>
          
        </div>
      )}
    </div>
  );
}
