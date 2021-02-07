import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import axios from 'axios'
import Buttons from '../buttons'

export default function Pokemon(props) {
    const [pokemon, setPokemon] = useState([])
    const [currentUrl, setUrl] = useState(`https:pokeapi.co/api/v2/pokemon/` + props.match.params.id)
    console.log("url = ")
    console.log(props.match)

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
        setUrl(`https:pokeapi.co/api/v2/pokemon/` + (props.match.params.id + 1 > 1118 ? props.match.params.id + 1 : props.match.params.id))
        console.log(currentUrl)
        axiosRequest(currentUrl)
    }

    function GoToPrevPage() {
        setUrl(`https:pokeapi.co/api/v2/pokemon/` + (props.match.params.id - 1 > 0 ? props.match.params.id - 1 : props.match.params.id))
        axiosRequest(currentUrl)
    }

    /**
     * Comunicação com a API que retorna os dados
     */
    function axiosRequest(currentUrl) {
        axios.get(currentUrl)
            .then(res => {
                setPokemon(Object.values(res.data.sprites))
            })
            .catch(error => {
                console.log(error)
            })
    }
    const imagesList = pokemon.filter(link => typeof link == 'string')

    return (
        <>
            <ListGroup style={{ width: '10rem' }}>
                {imagesList.map(p => (
                    <ListGroup.Item key={p}>
                        <img src={p}></img>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <Buttons
                GoToNextPage={GoToNextPage}
                GoToPrevPage={GoToPrevPage}
            />
        </>
    )
}
