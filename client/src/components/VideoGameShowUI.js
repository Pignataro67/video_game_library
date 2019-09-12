import React from 'react';
import { Link } from 'react-router-dom';

const VideoGameShowUI = ({ videoGame, handleDelete, }) => 

<div className='container text center'>
         <h3>Name: {videoGame.name}</h3>
         {videoGame.pic_url? (
     <img src={`${videoGame.pic_url}`} style={{height: '250px', width: '250px', margin: 'auto'}} alt={videoGame.name} />
   ) : (
     <img src='x.kinja-static.com/assets/images/logos/placeholders/default.png'
     style={{height: '250px', width: '250px', margin: 'auto'}} alt={videoGame.name} />
   )
  }

  <p>Description: {videoGame.description}</p>
  <p>Age Range: {videoGame.age_range}</p>
  <p><button className='btn btn-primary' onClick={() => handleDelete(videoGame)}>Remove Video Game</button></p>
  <p><Link className='btn btn-primary' to={`/video_games/${videoGame.id}/edit`}>Edit</Link></p>
</div>

export default VideoGameShowUI;