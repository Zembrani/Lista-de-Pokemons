import React, { useEffect, useState } from 'react'
import Buttons from '../../components/buttons';
import Header from '../../components/header'
import ListPokemons from '../../components/listPokemons';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';

export default function Home() {
  /**
   * Estrutura que armazena os links
   */
  const urlsEstruct = {
    currUrl: `https:pokeapi.co/api/v2/pokemon/`,
    nextUrl: null,
    prevUrl: null
  }

  const [pokemon, setPokemon] = useState([])
  const [urls, setUrls] = useState(urlsEstruct)

  /**
   * Efeito para imprimir os resultados pela primeira vez
   */
  useEffect(() => {
    axiosRequest(urls.currUrl)
  }, [])

  /**
 * GoToNextPage e GoToPrevPage são as funções chamadas pelo botões para avaçar ou voltar as páginas
 */
  function GoToNextPage() {
    axiosRequest(urls.nextUrl)
  }

  function GoToPrevPage() {
    axiosRequest(urls.prevUrl)
  }

  /**
   * Comunicação com a API que retorna os dados
   */
  function axiosRequest(currUrl) {
    axios.get(currUrl)
      .then(res => {
        setPokemon(res.data.results)
        setUrls({ currUrl: currUrl, nextUrl: res.data.next, prevUrl: res.data.previous })
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="Home" className="mx-auto" style={{marginRight: '200px'}}>
      <Header />
      <ListPokemons pokemon={pokemon} />
      <Buttons
        GoToNextPage={urls.nextUrl ? GoToNextPage : null}
        GoToPrevPage={urls.prevUrl ? GoToPrevPage : null}
      />
    </div>
  );
}