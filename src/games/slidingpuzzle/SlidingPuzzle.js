import React, { Component } from 'react';
import SlidingPuzzleServerCalls from '../../servercalls/SlidingPuzzleServerCalls'


class SlidingPuzzle extends Component{

  state={
    board: [[1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,0]],

    goalState: [[1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,0]],
  }


  componentWillMount(){
    SlidingPuzzleServerCalls.getNewRandomBoard(this.setupBoard);
  }

  setupBoard = (response) =>{
    console.dir(response.board)
    this.setState({
      board: response.board,
    })
  }

  tileClicked = (number, idx, row) =>{
      var newBoard = this.state.board;
        if(row+1 < 4 && this.state.board[row+1][idx] === 0){
          newBoard[row+1][idx] = this.state.board[row][idx];
          newBoard[row][idx] = 0;
        }if(row-1 > -1 && this.state.board[row-1][idx] === 0){
          newBoard[row-1][idx] = this.state.board[row][idx];
          newBoard[row][idx] = 0;
        }if(idx+1 < 4 && this.state.board[row][idx+1] === 0){
          newBoard[row][idx+1] = this.state.board[row][idx];
          newBoard[row][idx] = 0;
        }if(idx-1 > -1 && this.state.board[row][idx-1] === 0){
          newBoard[row][idx-1] = this.state.board[row][idx];
          newBoard[row][idx] = 0;
        }

        this.setState({
          board: newBoard,
        })
        this.testGoal()
  }

  testGoal = () =>{
    if(this.state.board.toString() === this.state.goalState.toString()){
      window.alert("Winner")
    }
  }

  render(){
    const row1 = this.state.board[0].map((number, idx) =>
      <div className="cell" key={number} onClick={this.tileClicked.bind(null, number, idx, 0)}>
        <h4>{number}</h4>
      </div>
    );
    const row2 = this.state.board[1].map((number, idx) =>
      <div className="cell" key={number} onClick={this.tileClicked.bind(null, number, idx, 1)}>
        <h4>{number}</h4>
      </div>
    );
    const row3 = this.state.board[2].map((number, idx) =>
      <div className="cell" key={number} onClick={this.tileClicked.bind(null, number, idx, 2)}>
        <h4>{number}</h4>
      </div>
    );
    const row4 = this.state.board[3].map((number, idx) =>
      <div className="cell" key={number} onClick={this.tileClicked.bind(null, number, idx, 3)}>
        <h4>{number}</h4>
      </div>
    );

    return(

      // const firstRow = this.state.board[0].map

      <div>

        <div className="grid ">
          <div className="row">
            {row1}
          </div>
          <div className="row">
            {row2}
          </div>
          <div className="row">
            {row3}
          </div>
          <div className="row">
            {row4}
          </div>
        </div>
        <div><h3>Get solution</h3></div>

      </div>

    )
  }


}


export default SlidingPuzzle;
