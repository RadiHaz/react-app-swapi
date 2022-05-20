import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './NavbarMenu.css'


export default function NavbarMenu() {
  return (
    <>
      <Navbar variant='light' style={{ backgroundColor: '#000' }} sticky='top'>
        <Container>
          <Navbar.Brand>
            <Nav style={{ fontSize: '23px', fontWeight: 'bolder', borderRadius: '40px' }} >
              <Nav.Link href='/' style={{ color: '#EEEEEE' }}>
                Star Wars Catalog
              </Nav.Link>
            </Nav>
          </Navbar.Brand>
          <Nav style={{ fontSize: '18px' }}>
            <Nav.Link href='/' style={{ color: 'white' }} className='nav-links' >Home</Nav.Link>
            <Nav.Link href='/pilots' style={{ color: 'white' }} className='nav-links'>Pilots</Nav.Link>
            <Nav.Link href='/starships' style={{ color: 'white' }} className='nav-links'>Starships</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
