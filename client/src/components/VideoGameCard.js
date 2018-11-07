import React from 'react'

const VideoGameCard = ({ videoGame }) =>
 <div key={videoGame.id} className='container text-center'>
  <Link to={`/videoGames/${videoGame.id}`}>{videoGame}</Link>
   {/* <p>Video Game Name: {videoGame.name}</p> */}
   <p>Age Range: {videoGame.age_range}</p>
   <p>Description: {videoGame.description}</p>
   {videoGame.pic_url? (
     <img src={`${videoGame.pic_url}`} style={{height: '250px', width: '250px', margin: 'auto'}} alt={videoGame.name} />
   ) : (
     <img src=''
     style={{height: '250px', width: '250px', margin: 'auto'}} alt={videoGame.name} />
   )
  }
 </div>

export default VideoGameCard