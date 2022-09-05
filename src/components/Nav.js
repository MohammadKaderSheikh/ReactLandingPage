import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";
import logo from './../Asset/image/logo.png';
import serch from './../Asset/image/navSerch.png'
import profile from './../Asset/image/profile_icon.png'
import './../Asset/css/nav.css'
import { Button } from 'react-bootstrap';


export const NavBar = () => {
  return (
    <Fragment>
         <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link  to="/Home"><img className="navLink navLogo" src={logo} alt="logo " /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navItems">
          <Nav.Link className="navItem"><Link className="navLink" to="/Home"> Home</Link></Nav.Link>
          <Nav.Link className="navItem"><Link className="navLink" to="/Home"> Products</Link></Nav.Link>
          <Nav.Link className="navItem"><Link className="navLink" to="/Home"> Services</Link></Nav.Link>
          <Nav.Link className="navItem"><Link className="navLink" to="/Home">Smart RFG</Link></Nav.Link>
          <Nav.Link className="navItem"><Link className="navLink" to="/Home"> Smart Contract</Link></Nav.Link>
          <Nav.Link className="navItem"><Link className="navLink" to="/Home"> <Button className="navButton">Get Started </Button></Link></Nav.Link>
          <Nav.Link className="navItem"><Link className="navLink" to="/Home"> <img src={serch} alt="" /></Link></Nav.Link>
          <Nav.Link className="navItem"><Link className="navLink" to="/Home"> <img src={profile} alt="" /></Link></Nav.Link>
         

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Fragment>
  )
}
