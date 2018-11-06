import React, { Component } from 'react';
import VideoGames from '../containers/VideoGameList'
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import VideoGameForm from '../containers/VideoGameForm'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/videoGames' component={VideoGames} />
          <Route exact path='/new' component={VideoGameForm} />
        </div>
      </Router>
    );
  }
}

export default App;
