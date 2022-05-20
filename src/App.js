import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavbarMenu from './Components/NavbarMenu';
import { Container, Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pilots from './Components/Pilots'
import Home from './Components/Home'
import Starships from './Components/Starships';

function App() {
  const [pilots, setPilots] = useState([]);
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const PILOTS_API_URL = 'https://swapi.dev/api/people';
  const STARSHIPS_API_URL = 'https://swapi.dev/api/starships';

  useEffect(() => {
    async function fetchPilots() {
      let res = await fetch(PILOTS_API_URL)
      let data = await res.json();
      setPilots(data.results);
      setLoading(false);
    }

    async function fetchStarships() {
      let res = await fetch(STARSHIPS_API_URL)
      let data = await res.json();
      setStarships(data.results);
      setLoading(false);
    }

    fetchPilots();
    fetchStarships();
  }, [])

  return (
    <div className='app-container'>
      <Router>
        <NavbarMenu className='navbar' />
        <Container className='app-container'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/pilots' element={<Pilots data={pilots} />} />
            <Route exact path='/starships' element={<Starships data={starships} />} />
          </Routes>
        </Container>
      </Router>
      {loading ? (
        <Container style={{ display: 'flex', 'justify-content': 'center' }} className='spinner-container'>
          <Spinner animation='border' variant='dark' style={{ padding: '40px', marginTop: '15px' }}>
          </Spinner>
        </Container>
      ) : (console.log('rendered'))
      }
    </div>
  );
}

export default App;
