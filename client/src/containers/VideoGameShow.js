import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { deleteVideoGame, updateVideoGame } from '../actions/videoGameActions'
import VideoGameShowUI from '../components/VideoGameShowUI'

class VideoGameShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      video_game: this.props.video_game,
      sendRedirect: false,
    }
  }

  handleDelete = video_game => {
    this.props.deleteVideoGame(video_game)
    this.setState({ sendRedirect: true })
  }

  render() {
    const { sendRedirect } = this.state
  
    const { video_game } = this.props

  return(
    <div>
      <VideoGameShowUI video_game={video_game} 
        handleDelete={this.handleDelete} />
      {sendRedirect && (
        <Redirect to ='/video_games' />
      )}
    </div>
    )
  }
}

const mapStateToProps = (state, myProps) => {
  const video_game = state.video_games.find(video_game => video_game.id === parseInt(myProps.match.params.video_gameId, 10))

  if (video_game) {
    return { video_game }
  } else {
    return {
      video_game: {}
    }
  }
}

const mapDispatchToProps = {
  deleteVideoGame, updateVideoGame
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoGameShow)