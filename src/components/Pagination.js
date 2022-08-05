/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Pagination = ({ pokemonsPerPage, totalPokemons ,paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++){
        pageNumbers.push(i);
    }
  return (
   
     
    <ul className="pagination">
        {pageNumbers.map(number =>(
            <li key ={number} className="page-link">
                <a onClick={()=> paginate(number)} >{number} </a>
            </li>
        ))}
    </ul>
   
   
  )
}

export default Pagination