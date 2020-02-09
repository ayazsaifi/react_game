import React from 'react';
import './TickPad.scss';
import { Container, Col, Row, Button } from 'react-bootstrap';

 const TickPad = (props) => {
    return (
        <Col md={4} xs={4} className='tick-pad'>
            <button className='tick-pad__button' onClick={() => props.value.tick ? alert('Cannot tick already ticked place') : props.onClick()}>
                <img className='tick-pad__button__image' src={props.value.scr} alt='default'/>
            </button>
        </Col>
    )
  }

export default TickPad;
