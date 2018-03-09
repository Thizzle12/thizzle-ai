import React, { Component } from 'react';
import TicImg from './images/tictactoe/ticfrontimg.jpg'
import SlidePuzzImg from './images/slidingpuzzle/slidingPuzzleGame.jpg'


class FrontPage extends Component {


  state={
    tictactoe:{
      name: "TicTacToe",
      url: "/TicTacToe",
      projectNr: 1,
      imgSrc: TicImg,
    },
    slidingPuzzle:{
      name: "Sliding Puzzle",
      url: "/slidingpuzzle",
      projectNr: 2,
      imgSrc: SlidePuzzImg,
    },

  }

  componentWillMount(){

  }

  projectChosen = (idx, project) =>{
    if(idx === 1){
      this.props.history.push(project.url);
    }else if(idx === 2){
      this.props.history.push(project.url)
    }
  }

  render(){


    return(

      <div>
        <div className="grid frontpage">
          <div className="row">
            <div className="cell frontpage" onClick={this.projectChosen.bind(null, this.state.tictactoe.projectNr, this.state.tictactoe)}>
              <h4>{this.state.tictactoe.name}</h4>
              <img className="tic-image" src={this.state.tictactoe.imgSrc} alt=""/>
            </div>
            <div className="cell frontpage" onClick={this.projectChosen.bind(null, this.state.slidingPuzzle.projectNr, this.state.slidingPuzzle)}>
              <h4>{this.state.slidingPuzzle.name}</h4>
              <img className="tic-image" src={this.state.slidingPuzzle.imgSrc} alt=""/>
            </div>
            <div className="cell frontpage">
              <img className="tic-image" src={this.state.tictactoe.imgSrc} alt=""/>
            </div>
          </div>

        </div>



      </div>


    );
  }


}


export default FrontPage;
