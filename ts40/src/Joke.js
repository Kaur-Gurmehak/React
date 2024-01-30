import React, { useEffect } from 'react'

function joke() {
    const[data,setData]=useState([]);
    const[setup,setSetup]=useState("");
    const[punchline,setPunch]=useState("");
    const fetchData = async()=>{
        const data=await fetch('https://official-joke-api.appspot.com/random_joke')
        const response = await data.json();
        console.log(response);
    }
  return (
    <div>
        <button onClick={fetchData}>Generate Joke</button>
    </div>
  )
}

export default joke