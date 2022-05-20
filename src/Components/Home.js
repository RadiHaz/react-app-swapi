import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import './Home.css'

export default function Home() {
  return (
    <>
      <div>
        <Container style={{ display: 'flex', justifyContent: 'center', padding: '350px' }} className='home-container'>
          <Link to='/pilots'>
            <Button variant='dark' className='home-btn'>Pilots</Button>
          </Link>
          <Link to='/starships'>
            <Button variant='dark' className='home-btn'>Starships</Button>
          </Link>
        </Container>
      </div>
    </>
  )
}
