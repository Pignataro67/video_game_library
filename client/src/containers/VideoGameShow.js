import React from 'react'
import { connect } from 'react-redux'

const VideoGameShow =({videoGame}) => {
  console.log({videoGame})

  return (
    <div>
      <h3>Name: {videoGame.name}</h3>
    </div>
  )
}

const mapStateToProps = (state, myProps) => {
  const videoGame = state.videoGames.find(videoGame => videoGame.id === myProps.match.params.videogameId)

  if (videoGame) {
    return { videoGame }
  } else {
    return {videoGame: {} }
  }
}

export default connect(mapStateToProps)(VideoGameShow)