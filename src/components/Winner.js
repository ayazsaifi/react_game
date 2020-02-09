import React from 'react';
import './TickPad.scss';
import { Container, Col, Row, Button, Card } from 'react-bootstrap';
import playerAWin from '../assets/player1_win.svg'
import playerBWin from '../assets/player2_win.svg'

 const Winner = (props) => {
    return (
        <div className='status-container'>
            <Container>
            <Row>
            <Col md={12} className='py-4'>
            <Card >
                <Card.Img variant="top" src={props.winnerName === 'Player_A'? playerAWin : playerBWin} />
                <Card.Body>
                    <Card.Title className='text-center'><h2>{props.winnerName} Won this Game!</h2></Card.Title>
                    <Card.Title className='text-center'><Button onClick={() => props.onClick()}>Start Again!</Button></Card.Title>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
        </div>
    )
  }

export default Winner;
