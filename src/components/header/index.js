import React from 'react'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'
import Logo from '../../img/pokemonLogo.png'

export default function Header() {

    // function search() {
    //     render ()
    // }

    return (
    <Navbar bg="dark">
        <Navbar.Brand href="/">
        <img
            src={Logo}
            width="180"
            height="90"
            className="d-inline-block align-top"
            alt="Go to home"
        />
        </Navbar.Brand>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form>
  </Navbar>
    )
}