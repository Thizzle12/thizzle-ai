import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, Route, Switch} from 'react-router';
import createBrowserHistory from 'history/createHashHistory';
import TicTacToeGame from './games/tictactoegame/TicTacToe'
import SlidingPuzzleGame from './games/slidingpuzzle/SlidingPuzzle'
import FrontPage from './FrontPage'
const history = createBrowserHistory();
class App extends Component {

  state={
  }

  componentWillMount(){

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>


        <div className="container-fluid">

          <Router history={history}>
            <Switch>
              <Route path="/TicTacToe" component={TicTacToeGame}/>
              <Route path="/slidingpuzzle" component={SlidingPuzzleGame}/>

              <Route path="" component={FrontPage}/>
            </Switch>
          </Router>

        </div>

      </div>
    );
  }
}

export default App;
