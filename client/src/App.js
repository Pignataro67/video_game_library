import React, { Component } from 'react';
import VideoGames from './components/VideoGames'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the Video Game Library</h1>
        <VideoGames />
      </div>
    );
  }
}

export default App;
