import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ListPokemons({ pokemon }) {
    // console.log("p = " + pokemon.map( p => (p.url)))
    
    return (
        <ListGroup style={{ width: '10rem' }}>
            {pokemon.map(p => (
                <ListGroup.Item key={p.name}>
                    <Link to={'/pokemon/' + p.name}>{p.name}</Link>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}