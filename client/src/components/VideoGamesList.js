import React from 'react'
import VideoGameCard from './VideoGameCard'

const VideoGamesList = ({ video_games }) => {
  const renderVideoGames = video_games.map((video_game, i) =>
    <VideoGameCard key={i} video_game={video_game} />
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