import React from 'react'
import { Link } from 'react-router-dom'

const VideoGameShowUI = ({ videoGame, handleDelete, toggleEdit }) => 

<div className='container text center'>
         <h3>Name: {videoGame.name}</h3>
         {videoGame.pic_url? (
     <img src={`${videoGame.pic_url}`} style={{height: '250px', width: '250px', margin: 'auto'}} alt={videoGame.name} />
   ) : (
     <img src=''
     style={{height: '250px', width: '250px', margin: 'auto'}} alt={videoGame.name} />
   )
  }
  <p>Description: {videogame.description}</p>
  <p>Age Range: {videoGame.age_range}</p>
  <button onClick={() => handleDelete(videoGame)}>Remove Video Game</button><br></br>
  <button><Link to={`/videoGames/${videoGame.id}/edit`}>Edit</Link><br /></button>
</div>

export default VideoGameUI