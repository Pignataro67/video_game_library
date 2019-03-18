import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { deleteVideoGame, updateVideoGame } from '../actions/videoGameActions'
import VideoGameShowUI from '../components/VideoGameShowUI'

class VideoGameShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoGame: this.props.videoGame,
      sendRedirect: false,
    }
  }

  handleDelete = videoGame => {
    this.props.deleteVideoGame(videoGame)
    this.setState({ sendRedirect: true })
  }

  render() {
    const { sendRedirect } = this.state
  
    const { videoGame } = this.props

  return(
    <div>
      <VideoGameShowUI videoGame={videoGame}
        handleDelete={this.handleDelete} />
      {sendRedirect && (
        <Redirect to ='/video_games' />
      )}
    </div>
    )
  }
}

const mapStateToProps = (state, myProps) => {
  const videoGame = state.videoGames.find(videoGame => videoGame.id === parseInt(myProps.match.params.videoGameId, 10))

  if (videoGame) {
    return { videoGame }
  } else {
    return {
      videoGame: {}
    }
  }
}

const mapDispatchToProps = {
  deleteVideoGame, updateVideoGame
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoGameShow)
