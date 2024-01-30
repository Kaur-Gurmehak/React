import React,{ useState,useEffect} from 'react'
import Pokemoncards from './Pokemoncards'

function Pokemondata() {
    const [data,setData]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
  const fetchData = async()=>{
    const data =await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(currentPage-1)*20}`)
    const response = await data.json();
    setData(response.results)
    setTotalPages(Math.ceil(1302 / 20));
   } 
   useEffect(()=>{
    fetchData();
}, [currentPage]);

const goToNextPage=()=>{
  setCurrentPage(currentPage+1);
};

const goToPrevPage=()=>{
  setCurrentPage(currentPage-1);
};

const btn={
  padding: '10px 20px',
  backgroundColor: '#5cff67',
  borderRadius:'10px',
  border:'black',
  textAlign: 'center',
  fontSize: '20px',
  color:'black',
  margin :'8px'

}

  return (
    <div>
        <div className='main'>
    <ul className='container'>
            {data.map((item,index)=>{
              return (
                <Pokemoncards  key={index} name={item.name} page={currentPage}/>
              )
            }
            )}
        </ul>
        </div>
        <div style={{marginLeft:'500px'}}>
            <button style={btn} onClick={goToPrevPage} disabled={currentPage===1}>Previous</button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button style={btn} onClick={goToNextPage} disabled={currentPage===totalPages}>Next</button>
        </div>
    </div>
  )
}

export default Pokemondata