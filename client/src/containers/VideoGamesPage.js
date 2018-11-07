import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/videoGameActions'
// import VideoGameCard from '../components/VideoGameCard'
import VideoGamesList from '../components/VideoGamesList'
import VideoGameShow from '../containers/VideoGameShow'

class VideoGamesPage extends Component {
  componentWillMount() {
    const { actions } = this.props
    actions.fetchVideoGames()
  }

  render() {
    
    const { videoGames, match } = this.props
    
    return(
      <div>
        <VideoGamesList videoGames={videoGames} />
        <Route path={`${match.url}/:videoGameId`} component={VideoGameShow} />
      </div>
      )
    }
  }

  const mapStateToProps = state => {
    return { videoGames: state.videoGames }
  }

  const mapDispatchToProps = dispatch => {
    return {actions: bindActionCreators(actions, dispatch)}
  }

  export default connect(mapStateToProps, mapDispatchToProps)(VideoGamesPage)