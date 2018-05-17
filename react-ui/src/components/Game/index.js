import React from 'react';
import {Component} from 'react';
// eslint-disable-next-line
import * as api from './services/api';
import './styles/Game.css';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      winner: undefined,
      winnerStatus: '',
      randomApiNumber: undefined

    };
    this.gameState = {
      turn: 'x',
      gameEnded: false,
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
    if (this.gameState.gameEnded || this.gameState.gameLocked) return; // to avoid more clicking if game is ended!

    if (this.gameState.board[box.dataset.square] === '') {
      //this will add the turn with index in to the array.

      this.gameState.board[box.dataset.square] = this.gameState.turn; // here the turn is x
      box.innerText = this.gameState.turn;// just changing the text of the box we clicked
      box.innerText === 'o' ? box.classList.add("red") : box.classList.add("blue");//changing between classes
      this.gameState.turn = this.gameState.turn === 'x' ? 'o' : 'x';// changing the game turn value

      this.gameState.totalMoves++;// here to use it to get the draw games
    }

    let gameResult = this.checkWinner();

    if (gameResult === 'x') {
      this.gameState.gameEnded = true;
      this.setState({
        winner: 'x',
        winnerStatus: 'Match won by X'
      });
    } else if (gameResult === 'o') {
      this.gameState.gameEnded = true;
      this.setState({
        winner: 'o',
        winnerStatus: 'Match won by O'
      });
    } else if (gameResult === 'draw') {
      this.gameState.gameEnded = true;
      this.setState({
        winner: 'draw',
        winnerStatus: 'Match is drawn'
      })
    }

    if (this.gameState.turn === 'o' && !this.gameState.gameEnded) {
      this.gameState.gameLocked = true;

      api.submitGameDetails(this.gameState).then((res) => {
        if (res) {
          this.setState({
            randomApiNumber: res
          })
        }
        setTimeout(() => {// to fire this function after a certain time
          if (this.state.randomApiNumber !== undefined) {
            this.gameState.gameLocked = false;
            this.clicked(document.querySelectorAll('.square')[this.state.randomApiNumber]);
          }
        }, 1000);
      }).catch(error => {
      });
    }
  }


  checkWinner() {
    const moves = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8]];
    let board = this.gameState.board;
    // check if no winner

    for (let i = 0; i < moves.length; i++) {
      if (board[moves[i][0]] === board[moves[i][1]] && board[moves[i][1]] === board[moves[i][2]])
        return board[moves[i][0]];
    }

    if (this.gameState.totalMoves === 9) {
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
            <h3>TicTacToe Board Game</h3>
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
        </div>
    );
  }
}

export default Game;
