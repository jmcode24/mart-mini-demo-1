import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Image from './Image';
import logo from '../assets/logo.png'; 
import {NavLink, Link } from 'react-router-dom';
import '../index.css';

const Header = () => {
  return(
    <>
      <Navbar fixed="top" variant="light" className="nav">
        <Container>
          <Navbar.Brand as={Link} to="/"> <Image pic={logo} /> </Navbar.Brand>
          <Nav className="ms-auto nav-item">
            <Nav.Link as={NavLink} to="/" activeclassname="active"><span className='heads'>Home</span></Nav.Link>
            <Nav.Link as={NavLink} to='/login' activeclassname="active"><span className='heads'>Sign in</span></Nav.Link>
            <Nav.Link as={NavLink} to='/register' activeclassname="active"><span className='heads'>Register</span></Nav.Link>
          </Nav>
        </Container>
    </Navbar>
    </>
  );
};

export default Header;