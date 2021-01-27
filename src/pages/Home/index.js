import React, { useEffect, useState } from 'react'
import Buttons from '../../components/buttons';
import Header from '../../components/header'
import ListPokemons from '../../components/listPokemons';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';

export default function Home() {
  const [pokemon, setPokemon] = useState([])
  const [currentUrl, setUrl] = useState(`https:pokeapi.co/api/v2/pokemon/`)
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()

  useEffect(() => {

    axios.get(currentUrl)
      .then(res => {
       setPokemon(res.data.results)
       setNextUrl(res.data.next)
       setPrevUrl(res.data.previous)
      })
      .catch(error => {
        console.log(error)
      })
  }, [currentUrl])

  function GoToNextPage() {
    setUrl(nextUrl)
  }

  function GoToPrevPage() {
    setUrl(prevUrl)
  }

  return (
    <div className="Home">
      <Header/>
      <ListPokemons pokemon={pokemon}/>
      <Buttons 
        GoToNextPage={nextUrl ? GoToNextPage : null}
        GoToPrevPage={prevUrl ? GoToPrevPage : null}
      />
    </div>
  );
}