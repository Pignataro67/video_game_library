import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

class VideoGameCard extends Component {
  
  render() {
    const { video_game } = this.props

    return (
 <div key={video_game.id} className='col-md-3 VideoGameCard text-center rounded'>
  <Link className='link' to={`/video_games/${video_game.id}`}>{video_game.name}</Link><br />
   {video_game.pic_url? (
     <img className='image' style={{height: '250px', width: '250px', margin: 'auto'}} src={`${video_game.pic_url}`} alt={video_game.name} />
   ) : (
     <img src='x.kinja-static.com/assets/images/logos/placeholders/default.png'
      style={{height: '250px', width: '250px', margin: 'auto'}} alt={video_game.name}/>
   )
  }

 </div>
    )
  }
}


export default VideoGameCard

// https:'x.kinja-static.com/assets/images/logos/placeholders/default.png'