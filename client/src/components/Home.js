import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Home = () =>
  <div>  
    <div className="container">
      <h1>Welcome to the Video Game Library</h1>
      <p>This is the place to keep track of your Video Games, from the NES days to Playstation/XBOX</p>
      {/* <h3>Please Choose an Option Below:</h3> */}
      <img src="https://i.pinimg.com/originals/f6/17/92/f61792692722c6db3521d931d3f6adb4.jpg"
      style={{height: '250px', width: '200px', margin: 'auto'}}
      alt='missing-image' />
      <br></br>
      <Link to='/videoGames'>View All Video Games</Link>
    </div>
  </div>

export default Home

// https://i.pinimg.com/originals/f6/17/92/f61792692722c6db3521d931d3f6adb4.jpg"