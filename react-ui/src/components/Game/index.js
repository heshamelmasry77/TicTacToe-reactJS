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

      winner: undefined,
      winnerStatus: ''
    };
    this.gameState = {
      turn: 'x',
      gameLocked: false,
      board: Array(9).fill(''),
      totalMoves: 0
    };

    this.clicked = this.clicked.bind(
        this);
    this.checkWinner = this.checkWinner.bind(
        this);
  }



  clicked(box) {
    if (this.gameState.gameEnded) return; // to avoid more clicking if game is ended!

    if(this.gameState.board[box.dataset.square] === '') {
      //this will add the turn with index in to the array.

      this.gameState.board[box.dataset.square] = this.gameState.turn;
      box.innerText = this.gameState.turn;

      this.gameState.turn = this.gameState.turn === 'x' ? 'o' : 'x';

          this.gameState.totalMoves++;
    }

    console.log(this.gameState.totalMoves);

    let gameResult = this.checkWinner();

    if(gameResult === 'x') {
      this.gameState.gameEnded = true;
      this.setState({
        winner: 'x',
        winnerStatus: 'Match won by X'
      });
    } else if(gameResult === 'o') {
      this.gameState.gameEnded = true;
      this.setState({
        winner: 'o',
        winnerStatus: 'Match won by O'
      });
    } else if(gameResult === 'draw') {
      this.gameState.gameEnded = true;
      this.setState({
        winner: 'draw',
        winnerStatus: 'Match is drawn'
      })
    }

    if(this.gameState.turn === 'o' && !this.gameState.gameEnded) {
      this.gameState.gameLocked = true;
        do {
          var random = Math.floor(Math.random()*9);
        } while(this.gameState.board[random] !== '');
        this.gameState.gameLocked = false;
        this.clicked(document.querySelectorAll('.square')[random]);
    }

  }


  checkWinner() {
    const moves = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8]];
    let board = this.gameState.board;
    // check if no winner

    for(let i=0;i<moves.length;i++) {
      if(board[moves[i][0]] === board[moves[i][1]] && board[moves[i][1]] === board[moves[i][2]])
        return board[moves[i][0]];
    }

    console.log(this.gameState.totalMoves);
    if(this.gameState.totalMoves === 9) {
      return 'draw';
    }
  }


  render() {
    return (
        <div className="Game">
          <div className="game-status">
            {this.state.winnerStatus}
          </div>
          <div className="game-header">
            <h3>TicTacToe</h3>
          </div>
          <div className="game-board" onClick={(e) => this.clicked(e.target)}>
            <div className="square" data-square="0"></div>
            <div className="square" data-square="1"></div>
            <div className="square" data-square="2"></div>
            <div className="square" data-square="3"></div>
            <div className="square" data-square="4"></div>
            <div className="square" data-square="5"></div>
            <div className="square" data-square="6"></div>
            <div className="square" data-square="7"></div>
            <div className="square" data-square="8"></div>
          </div>
          {/*<Footer/>*/}
        </div>
    );
  }
}

export default Game;
