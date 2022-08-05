import React from 'react'
import { Link } from 'react-router-dom';
import detail from '../pages/PokemonDetail'

const Pokemon = ({ pokemons, loading }) => {
  if(loading){
    return <h2>Loading .....</h2>
  }
  
    return <div className="banner-content-top">
    {pokemons?.map((poke, idx) => {
      return (
        <div className="card-pokemon" key={idx} >
          <div className='img'>
            <img src={poke.pictureFront} alt="" />
            <img src={poke.pictureBack} alt="" />
          </div>
          <div className="desc">
            <h5>{idx+1}</h5>
            <h2>{poke.name}</h2>
            <Link key={idx} to={`/pokemon/${idx+1}`}><button id="terbang" onClick={detail}>Info  </button></Link>
          </div>
        </div>
      )
    })}
  </div>

}

export default Pokemon