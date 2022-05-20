import React from 'react'
import { Card, CardGroup, CardImg, Container, Col } from 'react-bootstrap'
import './Pilots.css'

export default function Pilots({ data }) {
    return (
        <>
            <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
            <Container className='pilots-page-container'>
                <div className='title-container'>
                    <h1 className='h1-title'>
                        PILOTS
                    </h1>
                </div>
                <Container className='card-group-container'>
                    <CardGroup className='card-group'>
                        {data.map((pilots) => {
                            return (
                                <Col lg={4} className='card-col' style={{ padding: '25px' }}>
                                    <Card className='card-pilots'>
                                        <CardImg className='card-img' src='https://picsum.photos/1920/1080' />
                                        <Card.Body className='card-body'>
                                            <Card.Title>
                                                <h1 className='h1-card-title'>{pilots.name}</h1>
                                            </Card.Title>
                                            <div className='card-text-container'>
                                                <Card.Text className='card-text'>
                                                    <h4>Height: {pilots.height} cm</h4>
                                                    <h4>Mass: {pilots.mass} kg</h4>
                                                    <h4>Gender: {pilots.gender}</h4>
                                                    <h4>Hair Color: {pilots.hair_color}</h4>
                                                    <h4>Eye Color: {pilots.eye_color}</h4>
                                                </Card.Text>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </CardGroup>
                </Container>
            </Container>
        </>
    )
}
