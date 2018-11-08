import React from 'react'

const VideoGameShowUI = ({ videoGame, handleOnClick, toggleEdit }) => 

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
  <button onClick={this.deleteVideoGame}>Remove Video Game</button><br></br>
  <button onClick={() => toggleEdit()}>Edit Video Game</button>
</div>

export default VideoGameUI