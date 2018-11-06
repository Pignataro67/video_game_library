import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/videoGameActions'

class VideoGames extends Component {
  componentWillMount() {
    const { actions } = this.props
    actions.fetchVideoGames()
  }

// export default class VideoGames extends Component {
  render() {
    // const videoGames = [
    //   {"id":1,"name":"Contra","age_range":"10-12","pic_url":"https://i.imgur.com/gyKwGfFb.png"},
    //   {"id":2,"name":"Super Mario Bros. 3","age_range":"10-12","pic_url":"https://i.imgur.com/AMb7VAib.png"},
    //   {"id":3,"name":"Zelda","age_range":"10-12","pic_url":"https://i.imgur.com/g4TZnXeb.png"},
    //   {"id":4,"name":"Castlevania","age_range":"10-12","pic_url":"https://i.imgur.com/3Nbnlu7b.png"},
    //   {"id":5,"name":"Super C","age_range":"10-12","pic_url":"https://i.imgur.com/dQfocgBb.png"},
    //   {"id":6,"name":"Twisted Metal","age_range":"10-12","pic_url":"https://i.imgur.com/DwJ2YAob.png"},
    //   {"id":7,"name":"Destiny","age_range":"10-12","pic_url":"https://i.imgur.com/eZlrelib.jpg"}
    //   ]

    const { videoGames } = this.props
    console.log(videoGames)

    const renderVideoGames = videoGames.map(videoGame =>
      <div key={videoGame.id} className="container text-center">
        <p>Video Game: {videoGame.name}</p>
        <p>Age Range: {videoGame.age_range}</p>
        <img src={`${videoGame.pic_url}`} style={{height: '400px', width: '300px', margin: 'auto'}} alt={videoGame.name} />
      </div>
      )

    return(
      <div>
        {renderVideoGames}
      </div>
      )
    }
  }
