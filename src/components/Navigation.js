import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const Navigation = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='md'>
      <Container>
        <Link to='/' className='navbar-brand'>
          MovieZine
        </Link>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavLink exact path to='/' className='nav-link' variant='dark'>
              Home
            </NavLink>
            <NavLink to='/LatestMovie' className='nav-link' variant='dark'>
              Latest
            </NavLink>
            <NavLink to='/PopularMovies' className='nav-link'>
              Popular
            </NavLink>
            <NavLink to='/TopList' className='nav-link' variant='dark'>
              Toplist
            </NavLink>
            <NavLink to='/Genres' className='nav-link' variant='dark'>
              Genres
            </NavLink>
            {/* <NavDropdown title='Genres' id='basic-nav-dropdown'>
              <NavDropdown.Item as={Link} to='/Action'>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/Comedy'>
                Comedy
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/SciFi'>
                Sci-Fi
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
