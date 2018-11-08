import React from 'react'
import { Link } from 'react-router-dom'

const VideoGameCard = ({ videoGame }) =>
  <div><br />
 <div key={videoGame.id} className='container text-center'>
  <Link to={`/videoGames/${videoGame.id}`}>{videoGame}</Link><br />
   {/* <p>Age Range: {videoGame.age_range}</p>
   <p>Description: {videoGame.description}</p>
   <Link to={`/videoGames/${videoGame.id}`}>{videoGame.name}</Link><br /> */}
   {videoGame.pic_url? (
     <img src={`${videoGame.pic_url}`} style={{height: '250px', width: '250px', margin: 'auto'}} alt={videoGame.name} />
   ) : (
     <img src=''
     style={{height: '250px', width: '250px', margin: 'auto'}} alt={videoGame.name} />
   )
  }
 </div><br />
 </div>

export default VideoGameCard