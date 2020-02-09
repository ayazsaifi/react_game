import React from 'react';
import './TickPad.scss';
import { Container, Col, Row, Button, Card } from 'react-bootstrap';
import draw from '../assets/draw.svg'

const Draw = (props) => {
    return (
        <div className='status-container'>
            <Container>
                <Row>
                <Col md={12} className='py-4'>
                    <Card className=''>
                    <Card.Img variant="top" src={draw} />
                    <Card.Body>
                        <Card.Title className='text-center'>
                        <Button onClick={() => props.onClick()}>Start Again!</Button>
                        </Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Container>
        </div>
    )
  }

export default Draw;
