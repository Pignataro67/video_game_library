import React from 'react'
import VideoGameCard from './VideoGameCard'

const VideoGamesList = ({ videoGames }) => {
  const renderVideoGames = videoGames.map((videoGame, i) =>
    <VideoGameCard key={i} videoGame={videoGame} />
  )

  return (
      <div className='container-fluid'>
        <div className='row'>
        {renderVideoGames}
        </div>
      </div>
  )
}

export default VideoGamesList