import { useNavigate } from 'react-router-dom';
// import { charmeleon, mewtwo, jolteon, squirtle, umbreon } from '../images';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pokemon from '../components/Pokemon';
import Pagination from '../components/Pagination';

function Pokemonpage() {
  // const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState (1);
  const [pokemonsPerPage] = useState(20);

  useEffect(() => {
    setLoading(true);
    axios.get('https://pokedexbackend.herokuapp.com/pokemon')
      
      .then(Response => {
        // console.log(Response)
        
        setPokemons(Response?.data?.result);
        setLoading(false);
      })
  },[])
  // Pagination
  const indexOfLastPost = currentPage * pokemonsPerPage;
  const indexOfFirstPost = indexOfLastPost - pokemonsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstPost, indexOfLastPost);
  // Ganti Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="banner-content-top">
     <Pokemon pokemons={currentPokemons} loading={loading} />
     <Pagination 
       pokemonsPerPage={pokemonsPerPage} 
       totalPokemons={pokemons?.length}
       paginate={paginate}  />
       </div>
  )
}

export default Pokemonpage;
