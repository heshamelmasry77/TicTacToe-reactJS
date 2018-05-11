import React from 'react';
import {Component} from 'react';
// eslint-disable-next-line
import * as api from '../../services/api';
import './styles/Game.css';
// import PropTypes from 'prop-types'; // ES6

// import Footer from '../Shared/Footer/Footer';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      turn: 'x',
      gameEnded: false
    };

    this.clicked = this.clicked.bind(
        this);
  }


  // here is function take event and console my test
  clicked = (event) => {
    // console.log(event.target);
    console.log('current turn', this.state.turn);
    event.target.innerText = this.state.turn ;
    this.setState({
      turn: this.state.turn === 'x' ? 'o' : 'x'
    })
  };

  render() {
    return (
        <div className="Game">
          <div className="game-header">
            <h3>TicTacToe</h3>
          </div>
          <div className="game-board" onClick={(e) => this.clicked(e)}>
            <div className="square"> </div>
            <div className="square"> </div>
            <div className="square"> </div>
            <div className="square"> </div>
            <div className="square"> </div>
            <div className="square"> </div>
            <div className="square"> </div>
            <div className="square"> </div>
            <div className="square"> </div>
          </div>
          {/*<Footer/>*/}
        </div>
    );
  }
}

export default Game;
