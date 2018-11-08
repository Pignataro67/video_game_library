import React from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { deleteVideoGame } from '../actions/videoGameActions'
import VideoGameShowUI from '../components/VideoGameShowUI'

class VideoGameShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videoGame: this.props.videoGame,
      sendRedirect: false,
      isEditing: false
    }
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  handleDelete = videoGame => {
    this.props.deleteVideoGame(videoGame)
    this.setState({ sendRedirect: true })
  }

  toggleEdit() {
    // console.log("Fire this in the hole!")
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  componentWillReceiveProps(nextProps) {
    const { videoGame } = this.props
    if (videoGame.id !== nextProps.videoGame.id) {
      this.setState({ videoGame: nextProps.videoGame })
    }
  }

  updateVideoGameState = e => {
    const name = e.target.name
    const videoGame = this.state.videoGame
    videoGame[name] = e.target.value
    return this.setState({
      videoGame: videoGame
    })
  }

  render() {
    const { sendRedirect, isEditing } = this.state
    // console.log(this.myProps)
    const { videoGame } = this.props

    if (isEditing) {
      return (
        <div>
          <h1>Please Edit Video Game</h1>
        </div>
      )
    }
    
  return(
    <div>
      <VideoGameShowUI videoGame={videoGame} 
        handleOnClick={this.handleDelete}
        toggleEdit={this.toggleEdit} />
      {sendRedirect && (
        <Redirect to ='/videoGames' />
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

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoGameShow)