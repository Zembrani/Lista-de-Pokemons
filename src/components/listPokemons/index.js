import React from 'react'
import { Link } from 'react-router-dom';

export default function ListPokemons({ pokemon }) {

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
        height: '40px'
    }

    return (
        <div>
            <ul style={list}>
                {pokemon.map((value, key) => (
                        <Link key={key} style={card} to={'/pokemon/'+value.name}>{value.name}</Link>
                ))}
            </ul> 
        </div>
    )
}