import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ListPokemons({ pokemon }) {

    const style = {
        width: '10rem',
        margin: 'auto',
        textAlign: 'center'
    }

    return (
        <div className="d-flex justify-content-center" >
            {pokemon.map(p => (
                    <div className="p-2 col-example text-left" key={p.name}>{p.name}</div>
            ))}
        </div>
    )
}