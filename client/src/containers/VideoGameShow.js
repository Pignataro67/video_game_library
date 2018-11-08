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
      sendRedirect: false,
      isEditing: false
    }
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  handleOnClick = videoGame => {
    this.props.deleteVideoGame(videoGame)
    this.setState({ sendRedirect: true })
  }

  toggleEdit() {
    console.log("Fire this in the hole!")
    this.setState({
      isEditing: !this.state.isEditing
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
        handleOnClick={this.handleOnClick}
        toggleEdit={this.toggleEdit} />
      {sendRedirect && (
        <Redirect to ='/videoGames' />
      )}
    </div>
    )
  }
}
