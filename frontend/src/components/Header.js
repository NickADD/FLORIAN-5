import React from 'react'
import { Container, Row, Navbar, Nav } from 'react-bootstrap'

function Header() {
    return (
        <Header>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>

                </Nav>

            </Navbar.Collapse>
            </Navbar>
        </Header>
    )
}

export default Header
