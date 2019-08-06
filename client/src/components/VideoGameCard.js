import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VideoGameCard extends Component {
  
  render() {
    const { videoGame } = this.props

    return (
 <div key={videoGame.id} className='col-md-3 VideoGameCard text-center rounded'>
  <Link className='link' to={`/video_games/${videoGame.id}`}>{videoGame.name}</Link><br />
   {videoGame.pic_url? (
     <img className='image' style={{height: '250px', width: '250px', margin: 'auto'}} src={`${videoGame.pic_url}`} alt={videoGame.name} />
   ) : (
     <img src='x.kinja-static.com/assets/images/logos/placeholders/default.png'
      style={{height: '250px', width: '250px', margin: 'auto'}} alt={videoGame.name}/>
   )
  }

 </div>
    )
  }
}


export default VideoGameCard;

// https:'x.kinja-static.com/assets/images/logos/placeholders/default.png'