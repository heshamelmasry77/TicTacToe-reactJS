import React from 'react';
import {Component} from 'react';
// eslint-disable-next-line
import * as api from '../../services/api';
import './styles/Game.css';
// import PropTypes from 'prop-types'; // ES6

// import Footer from '../Shared/Footer/Footer';

class Game extends Component {

  // here is function take event and console my test
  static clicked(event) {
    console.log(event.target);
  }

  render() {
    return (
        <div className="Game">
          <div className="game-header">
            <h3>TicTacToe</h3>
          </div>
          <div className="game-board" onClick={(e) => Game.clicked(e)}>
            <div className="square">1</div>
            <div className="square">2</div>
            <div className="square">3</div>
            <div className="square">4</div>
            <div className="square">5</div>
            <div className="square">6</div>
            <div className="square">7</div>
            <div className="square">8</div>
            <div className="square">9</div>
          </div>
          {/*<Footer/>*/}
        </div>
    );
  }
}

export default Game;
