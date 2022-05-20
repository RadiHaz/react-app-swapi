import React from 'react'
import { Card, CardGroup, CardImg, Container, Col } from 'react-bootstrap'
import './Starships.css'

export default function Starships({ data }) {
    return (
        <>
            <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
            <Container className='starships-page-container'>
                <div className='title-container'>
                    <h1 className='h1-title'>
                        STARSHIPS
                    </h1>
                </div>
                <Container className='card-group-container'>
                    <CardGroup className='card-group'>
                        {data.map((starships) => {
                            return (
                                <Col lg={4} className='card-col' style={{ padding: '25px' }}>
                                    <Card className='card-starships'>
                                        <CardImg className='card-img' src='https://picsum.photos/1920/1080' />
                                        <Card.Body className='card-body'>
                                            <Card.Title>
                                                <h1 className='h1-card-title'>{starships.name}</h1>
                                            </Card.Title>
                                            <div className='card-text-container'>
                                                <Card.Text className='card-text'>
                                                    <h4>Model: {starships.model} kg</h4>
                                                    <h4>Manufacturer: {starships.manufacturer}</h4>
                                                    <h4>Cost: {starships.cost_in_credits}</h4>
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
