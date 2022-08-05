import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Detailpoke() {

  const params = useParams()
  const ID = params.id
  
  
  const [stats, setStats] = useState([]);
  useEffect(()=>{
    axios.get(`https://pokedexbackend.herokuapp.com/pokemon/${ID}`)
    .then(Response=>{
      setStats(Response.data.result.stats)
    })
  },[ID])


  const [details, setDetails] = useState([])
  useEffect(() => {
    axios.get(`https://pokedexbackend.herokuapp.com/pokemon/${ID}`)
      .then(Response => {
        setDetails(Response.data.result ?? [])
        // console.log(Response.data.result);
      });
  }, [ID])

  return (
    <div className="banner-content-top">
      <img src={details.image} alt="pokemon" />
      <div className='info'>
        <p>Name : {details.name}</p>
        <p>Abilities : {details.abilities}</p>
        <p>Stats</p>
        {stats.map((poke, idx)=>{
          return(
            <div key={idx}>
              <p>{poke.name} :  {poke.value}</p>
            </div>
          )
        })}
        <p>Types : {details['types']}</p>
      </div>
    </div>
  )
}

export default Detailpoke