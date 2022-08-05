import axios from 'axios';

export function getPokemonAPI() {
  return axios.get('https://pokedexbackend.herokuapp.com/pokemon');
};

export function getPokemonDetailAPI(id) {
    return axios.get(`https://pokedexbackend.herokuapp.com/pokemon/${id}`);
  }
