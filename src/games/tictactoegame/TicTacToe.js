import React, { Component } from 'react';
import TicServerCalls from '../../servercalls/TicTacToeCalls'
import xImage from '../../images/tictactoe/x.gif'
import oImage from '../../images/tictactoe/o.gif'



class TicTacToe extends Component {

  state={
    board:[],
    player:2,
    computer:1,
  }


  componentWillMount(){
    this.setState({
      board:[0,0,0,0,0,0,0,0,0],
    })
  }

  cellClicked = (cellNumber) =>{
    if(this.state.board[cellNumber] === 0 && this.state.winnerExists !== true){
      var newBoard = [];

      for (var i = 0; i < this.state.board.length; i++) {
        if(i === cellNumber){
          newBoard[i] = this.state.player;
        }else{
          newBoard[i] = this.state.board[i]
        }
      }
      this.getNextMove(newBoard);
    }
  }

  getNextMove = (newBoard) =>{
    TicServerCalls.getComputerMove(newBoard,this.showComputerMove)
  }

  showComputerMove = (response) =>{
    this.setState({
      board: response.board,
      winnerExists: response.winnerExists,
      winnerIs: response.winnerIs,
    });
  }

  newGame = () =>{
    this.setState({
      board:[0,0,0,0,0,0,0,0,0],
      winnerExists: false,
      winnerIs: null,
    })
  }

  render() {
    if(this.state.winnerExists === true){
      window.alert("The winner is: " + this.state.winnerIs);
    }

    return (
      <div>
        <div className="grid">
          <div className="row">
            <div className="cell" onClick={this.cellClicked.bind(null,0)}>
              {this.state.board[0] === 0 ? <p></p>:
                (this.state.board[0] === 1 ? <img className="tic-image" alt="" src={xImage}/>: <img alt="" className="tic-image" src={oImage}/>)}
            </div>
            <div className="cell" onClick={this.cellClicked.bind(null,1)}>
              {this.state.board[1] === 0 ? <p></p>:
                (this.state.board[1] === 1 ? <img className="tic-image" alt="" src={xImage}/>: <img alt="" className="tic-image" src={oImage}/>)}
            </div>
            <div className="cell" onClick={this.cellClicked.bind(null,2)}>
              {this.state.board[2] === 0 ? <p></p>:
                (this.state.board[2] === 1 ? <img className="tic-image" alt="" src={xImage}/>: <img alt="" className="tic-image" src={oImage}/>)}
            </div>
          </div>
          <div className="row">
            <div className="cell" onClick={this.cellClicked.bind(null,3)}>
              {this.state.board[3] === 0 ? <p></p>:
                 (this.state.board[3] === 1 ? <img className="tic-image" alt="" src={xImage}/>: <img alt="" className="tic-image" src={oImage}/>)}
            </div>
            <div className="cell" onClick={this.cellClicked.bind(null,4)}>
              {this.state.board[4] === 0 ? <p></p>:
                (this.state.board[4] === 1 ? <img className="tic-image" alt="" src={xImage}/>: <img alt="" className="tic-image" src={oImage}/>)}
            </div>
            <div className="cell" onClick={this.cellClicked.bind(null,5)}>
              {this.state.board[5] === 0 ? <p></p>:
                 (this.state.board[5] === 1 ? <img className="tic-image" alt="" src={xImage}/>: <img alt="" className="tic-image" src={oImage}/>)}
            </div>
          </div>
          <div className="row">
            <div className="cell" onClick={this.cellClicked.bind(null,6)}>
              {this.state.board[6] === 0 ? <p></p>:
                 (this.state.board[6] === 1 ? <img className="tic-image" alt="" src={xImage}/>: <img alt="" className="tic-image" src={oImage}/>)}
            </div>
            <div className="cell" onClick={this.cellClicked.bind(null,7)}>
              {this.state.board[7] === 0 ? <p></p>:
                (this.state.board[7] === 1 ? <img className="tic-image" alt="" src={xImage}/>: <img alt="" className="tic-image" src={oImage}/>)}
            </div>
            <div className="cell" onClick={this.cellClicked.bind(null,8)}>
              {this.state.board[8] === 0 ? <p></p>:
                (this.state.board[8] === 1 ? <img className="tic-image" alt="" src={xImage}/>: <img alt="" className="tic-image" src={oImage}/>)}
            </div>
          </div>
        </div>


        <div className="refresh-game" onClick={this.newGame}>
          <p>New Game</p>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default TicTacToe;
