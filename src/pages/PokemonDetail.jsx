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
    <div className='banner-wrapper'>
    <div className="banner-content-pokemon">
      <img src={details.image} alt="pokemon" />
      <div className='info'>
        <h2 className='name-poke'>Name : {details.name}</h2>
        <p>Abilities :</p>
        <p className='ab'>{details.abilities}</p>
        <h4>Stats : </h4>
        {stats.map((poke, idx) => {
          return (
            <div key={idx} className="stats-info">
              <p className='stats'>{poke.name} :  {poke.value}</p>
            </div>
          )
        })}
        <p>Types : {details['types']}</p>
      </div>
    </div>
  </div>

  )
}

export default Detailpoke