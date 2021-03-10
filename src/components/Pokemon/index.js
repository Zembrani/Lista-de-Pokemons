import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import axios from 'axios'
import Buttons from '../buttons'
import Header from '../header'

export default function Pokemon(props) {
    const pokemonInit = {
        infos : null,
        images : null
    }
    const [pokemon, setPokemon] = useState(pokemonInit)
    const [currentUrl, setUrl] = useState('https://pokeapi.co/api/v2' + props.match.url)
    const [id, setId] = useState()

    /**
     * Efeito para imprimir os resultados pela primeira vez
     */
    useEffect(() => {
        axiosRequest(currentUrl)
    }, [currentUrl])

    /**
     * GoToNextPage e GoToPrevPage são as funções chamadas pelo botões para avaçar ou voltar as páginas
    */
    function GoToNextPage() {
        setUrl(`https://pokeapi.co/api/v2/pokemon/` + (id+1 > 1118 ? id : id+1) + '/')
    }

    function GoToPrevPage() {
        setUrl(`https://pokeapi.co/api/v2/pokemon/` + (id-1 < 1 ? id : id-1) + '/')
    }

    /**
     * Comunicação com a API que retorna os dados
     */
    function axiosRequest(currentUrl) {
        axios.get(currentUrl)
            .then(res => {
                setId(res.data.id)
                setPokemon({info : res.data, images : Object.values(res.data.sprites)})
            })
            .catch(error => {
                console.log(error)
            })
        }

    //Verificar o ocorre que chega aqui antes de ser atribuido um valor para o pokemon
    const imagesList = pokemon.images ? pokemon.images.filter(link => typeof link == 'string') : ['../../img/loading.jpg']

    const list = {
        height: '50px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        flex_shrink: '5'
    }

    const card = {
        padding: '2px 2px 2px 2px',
        border: '3px solid silver',
        margin: '2px 2px 2px 2px',
        height: 'auto'
    }

    return (
        <>
            <Header/>
            {/* Mesmo problema aqui, o pokemons ainda não está definido */}
            <div>Nome : {pokemon.info ? pokemon.info.name : null}</div>
            <ul style={list}>
                {imagesList.map(p => (
                    <div key={p} style={card}>
                        <img alt={p} src={p}></img>
                    </div>
                ))}
            </ul>
            <Buttons
                GoToNextPage={GoToNextPage}
                GoToPrevPage={GoToPrevPage}
            />
        </>
    )
}
