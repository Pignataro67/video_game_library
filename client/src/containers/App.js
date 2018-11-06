import React, { Component } from 'react';
import VideoGames from '../containers/VideoGameList'
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path="/videoGames" component={VideoGames} />
        </div>
      </Router>
    );
  }
}

export default App;
