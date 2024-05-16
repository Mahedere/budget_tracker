import React from "react";
import {Navbar, Container} from 'react-bootstrap';
function Header(){
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#">Budget Tracker</Navbar.Brand>
        </Container>
        </Navbar>
    );
}