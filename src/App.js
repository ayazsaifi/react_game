import React from 'react';
import './App.scss';
import { connect } from 'react-redux'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TickPad from './components/TickPad'
import logo from './assets/logo.svg'
import playerA from './assets/player1.svg'
import playerB from './assets/player2.svg'
import { tickPosition , reset } from './actions'
import draw from './assets/draw.svg'
import Winner from './components/Winner'
import Draw from './components/Draw'

class App extends React.Component {

  renderPosition(index) {
      this.props.tickPosition(index)
  }

  reset() {
    this.props.resetGame()
  }

  render() {
    const { gameArray, isNext , gameStatus } = this.props;
    return (
      <div className='game'>
        <Container>
          <Row className='game__container'>
            <Col md={3} sm={12}>
              <Card className='game__container__player' bg='warning'>
                <Card.Img className='game__container__player-image' variant="top" src={playerA}/>
                <Card.Body>
                  <Card.Title className='text-center'><h2>Player A</h2></Card.Title>
                </Card.Body>
              </Card>
              <Card className='mt-4'>
                <Card.Body className={['text-center' , isNext ? 'game__container__player-turn' : 'game__container__player-wait']}>
                  <Card.Title >{isNext ? 'Your turn' : 'Wait for your turn' }</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} sm={12}>
              {gameArray.map((item, i) => <TickPad key={i} value={item} onClick={() => this.renderPosition(i)}/>)}
            </Col>
            <Col md={3} sm={12}>
              <Card className='game__container__player' bg='danger'>
                <Card.Img className='game__container__player-image' variant="top" src={playerB} />
                <Card.Body>
                  <Card.Title className='text-center'><h2>Player B</h2></Card.Title>
                </Card.Body>
              </Card>
              <Card className='mt-4'>
                <Card.Body className={['text-center' , isNext ? 'game__container__player-wait' : 'game__container__player-turn']}>
                  <Card.Title >{isNext ? 'Wait for your turn' : 'Your turn'}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        {(gameStatus === 'Player_A' || gameStatus === 'Player_B') && <Winner winnerName = {gameStatus} onClick={() => this.reset()}/>}
        { gameStatus === 'Try_again' && <Draw onClick={()=> this.reset()}/> }
      </div>
    )
  }
}


const mapStateToProps = ({tickPostion}) => {
  return tickPostion
}

const mapDispatchToProps = dispatch => ({ 
  tickPosition: (i) => dispatch(tickPosition(i)) , 
  resetGame : () => dispatch(reset())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
