import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ListPokemons({ pokemon }) {
    
    return (
        <ListGroup style={{ width: '10rem' }}>
            {pokemon.map(p => (
                <ListGroup.Item key={p.name}>
                    <Link to={
                        {
                            pathname : '/pokemon/' + p.name,
                            url : p.url}
                        }>
                        {p.name}</Link>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}