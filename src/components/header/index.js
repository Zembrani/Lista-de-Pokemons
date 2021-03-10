import React from 'react'
import { Navbar, Form, FormControl, Button, NavDropdown, Nav } from 'react-bootstrap'
import Logo from '../../img/pokemonLogo.png'
import { Link } from 'react-router-dom';

export default function Header() {

    // function search() {
    //     render ()
    // }

    return (
    <Navbar bg="dark">
        <Link to="/">
        <img
            src={Logo}
            width="180"
            height="90"
            className="d-inline-block align-top"
            alt="Go to home"
        />
        </Link>
            <Nav className="mr-auto">
                <Link to="/">Home</Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form>
  </Navbar>
    )
}