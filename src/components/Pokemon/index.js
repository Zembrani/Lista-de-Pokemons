import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Pokemon(props) {
    const [pokemon, setPokemon] = useState([])
    const [currentUrl, setUrl] = useState(`https:pokeapi.co/api/v2/pokemon/` + props.match.params.id)

    useEffect(() => {

        axios.get(currentUrl)
        .then(res => {
            // console.log(res.data.sprites.map(link => {return link}))
            // console.log(res.data.sprites.map(objeto => objeto.back_default))
        setPokemon(Object.values(res.data.sprites))
        })
    }, [currentUrl])

    console.log('pokemon = ')
    console.log(pokemon)
    console.log(pokemon.filter(link => link != null))

    // const lista = teste.map((i) => <div>{i}</div>)
    // console.log(teste.isArray())
    return (
        <div>
            {/* { lista }  */}
        </div>
    )
}
