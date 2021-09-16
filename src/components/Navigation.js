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
            <NavLink to='/LatestMovies' className='nav-link'>
              Latest
            </NavLink>
            <NavLink to='/TopList' className='nav-link' variant='dark'>
              Top List
            </NavLink>
            <NavDropdown title='Genres' id='basic-nav-dropdown'>
              <NavLink to='/Action' className='nav-link'>
                Action
              </NavLink>
              <NavLink to='/Comedy'>Comedy</NavLink>
              <NavDropdown.Item href='#action/3.3'>Sci-Fi</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
