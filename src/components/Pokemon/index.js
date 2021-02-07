import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import axios from 'axios'
import Buttons from '../buttons'
import Header from '../header'

export default function Pokemon(props) {
    const [pokemon, setPokemon] = useState([])
    const [currentUrl, setUrl] = useState(props.location.url)
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
                setPokemon(Object.values(res.data.sprites))
            })
            .catch(error => {
                console.log(error)
            })
    }
    const imagesList = pokemon.filter(link => typeof link == 'string')

    return (
        <>
            <Header/>
            <ListGroup style={{ width: '10rem' }}>
                {imagesList.map(p => (
                    <ListGroup.Item key={p}>
                        <img alt={p} src={p}></img>
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
