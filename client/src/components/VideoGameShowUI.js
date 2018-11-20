import React from 'react'
import { Link } from 'react-router-dom'

const VideoGameShowUI = ({ video_game, handleDelete, }) => 

<div className='container text center'>
         <h3>Name: {video_game.name}</h3>
         {video_game.pic_url? (
     <img src={`${video_game.pic_url}`} style={{height: '250px', width: '250px', margin: 'auto'}} alt={video_game.name} />
   ) : (
     <img src='x.kinja-static.com/assets/images/logos/placeholders/default.png'
     style={{height: '250px', width: '250px', margin: 'auto'}} alt={video_game.name} />
   )
  }
  <p>Description: {video_game.description}</p>
  <p>Age Range: {video_game.age_range}</p>
  <p><button className='btn btn-primary' onClick={() => handleDelete(video_game)}>Remove Video Game</button></p>
  <p><Link className='btn btn-primary' to={`/video_games/${video_game.id}/edit`}>Edit</Link></p>
</div>

export default VideoGameShowUI