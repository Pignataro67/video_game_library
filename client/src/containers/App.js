import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/videoGameActions';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import VideoGamesList from '../components/VideoGamesList';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import VideoGameForm from '../containers/VideoGameForm';
import VideoGameShow from './VideoGameShow';

class App extends Component {

 componentDidMount() {
    const { actions } = this.props
    actions.fetchVideoGames()
  }   

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Switch>
    <Route exact path='/video_games' render={(props) => <VideoGamesList videoGames={this.props.videoGames}/> } />
            <Route exact path='/video_games/new' component={VideoGameForm} />
            <Route exact path='/video_games/:videoGameId' component={VideoGameShow} />
            <Route exact path='/video_games/:videoGameId/edit' component={VideoGameForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return { videoGames: state.videoGames }
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);