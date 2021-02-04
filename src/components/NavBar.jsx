import React, { Component } from 'react'
import {Navbar,FormControl,Button,Nav,Form,NavDropdown} from "react-bootstrap"
import Strivelogo from "../Strivelogo.png"

export default class NavBar extends Component {
    render() {
        return (
<Navbar bg="success" variant="dark">
    <Navbar.Brand href="/home">
      <img
        alt=""
        src={Strivelogo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      StriveJobs
    </Navbar.Brand>
    <Nav>
    <Nav.Link href="/Favorite">Favorite</Nav.Link>
    </Nav>
  </Navbar>
        )
    }
}

