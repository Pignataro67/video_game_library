import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/videoGameActions'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import VideoGamesPage from '../containers/VideoGamesPage'
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import VideoGameForm from '../containers/VideoGameForm'
import VideoGameShow from './VideoGameShow'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
            <Route exact path='/videoGames' component={VideoGamesPage} />
            <Route exact path='/videoGames/:videoGameId' component={VideoGameShow} />
            <Route exact path='/videoGames/new' component={VideoGameForm} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App)