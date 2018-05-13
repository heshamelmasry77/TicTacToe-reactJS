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
      board: Array(9).fill(''),
      totalMoves: 0,
      turn: 'x',
      gameEnded: false,
    };

    this.clicked = this.clicked.bind(
        this);
    this.checkWinner = this.checkWinner.bind(
        this);
  }


  // here is function take event and console my test
  clicked = (event) => {
    if (this.gameState.gameEnded) return; // to avoid more clicking if game is ended!

    if (this.gameState.board[event.target.dataset.square] === "") {
      // console.log(event.target);
      //this will add the turn with index in to the array.
      this.gameState.board[event.target.dataset.square] = this.gameState.turn;

      console.log('current turn', this.gameState.turn);
      event.target.innerText = this.gameState.turn;
      this.gameState.turn = this.gameState.turn === 'x' ? 'o' : 'x';
      this.gameState.totalMoves++;
    }

    let gameResult = this.checkWinner();

    console.log(gameResult);
    if (gameResult === 'x') {
      this.gameState.gameEnded = true;

      this.setState({
        winner: 'x',
        winnerStatus: 'winner for now is X'
      });

      console.log('x winner');

      // let squares = document.getElementsByClassName("square");
      // for (let i = 0; i < squares.length; i++) {
      //   squares[i].innerText = '';
      // }
    }
    else if (gameResult === 'o') {
      this.gameState.gameEnded = true;

      this.setState({
        winner: 'o',
        winnerStatus: 'winner for now is O'
      });


      console.log(this.gameState.gameEnded);
      // let squares = document.getElementsByClassName("square");
      // for (let i = 0; i < squares.length; i++) {
      //   squares[i].innerText = '';
      // }
    }
    if (gameResult === 'draw') {
      this.gameState.gameEnded = true;

      this.setState({
        winner: 'draw',
        winnerStatus: 'winner for now is Draw'
      });


      // let squares = document.getElementsByClassName("square");
      // for (let i = 0; i < squares.length; i++) {
      //   squares[i].innerText = '';
      // }
    }
  };

  checkWinner() {
    const winnersMoves = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8]];
// check if no winner
    for (let i = 0; i < winnersMoves.length; i++) {
      if (this.gameState.board[winnersMoves[i][0]] === this.gameState.board[winnersMoves[i][1]] && this.gameState.board[winnersMoves[i][1]] === this.gameState.board[winnersMoves[i][2]]) {
        return this.gameState.board[winnersMoves[i][0]];
      }
    }
    console.log(this.gameState.totalMoves);
    if (this.gameState.totalMoves === 9) {
      return 'draw';
    }
  };


  render() {
    return (
        <div className="Game">
          <div className="game-status">
            {this.state.winnerStatus}
          </div>
          <div className="game-header">
            <h3>TicTacToe</h3>
          </div>
          <div className="game-board" onClick={(e) => this.clicked(e)}>
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
