import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import VideoGamesPage from '../containers/VideoGamesPage'

const Home = () =>
  <div>  
    <div className="container">
      <h1>Welcome to the Video Game Library</h1>
      <p>This is the place to keep track of your Video Games, from the NES days to Playstation/XBOX</p>
      <img src="https://i.pinimg.com/originals/f6/17/92/f61792692722c6db3521d931d3f6adb4.jpg"
      style={{height: '800px', width: '1800px', margin: 'auto'}}
      alt='missing' />
      <br></br>
      <Link to='/videoGames'>Click to View All Video Games</Link><br></br>
      <Link to='/videoGames/new'>Click to Begin Adding Video Games</Link>
      <br></br>
    </div>
  </div>

export default Home

// https://i.pinimg.com/originals/f6/17/92/f61792692722c6db3521d931d3f6adb4.jpg"