import React from 'react'
import VideoGameCard from './VideoGameCard'

class VideoGamesList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      //videoGames: this.props.videoGames,
      textInput: ''
    }
  }

  handleChange = e => {
    const {name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render () {
    const { videoGames } = this.props
    const renderVideoGames = videoGames.filter(videoGame => {
      return videoGame.name.toUpperCase().includes(this.state.textInput.toUpperCase()) }).map((videoGame, i) =>
    <VideoGameCard key={i} videoGame={videoGame} />
  )
    return (
        <div className='container-fluid'>
        <input
          type='text'
          onChange={e => this.handleChange(e)}
          name='textInput'
          value={this.state.textInput}
        />
          <div className='row'>
          {renderVideoGames}
          </div>
        </div>
    )
  }
}

// const VideoGamesList = ({ videoGames }) => {
//   const renderVideoGames = videoGames.map((videoGame, i) =>
//     <VideoGameCard key={i} videoGame={videoGame} />
//   )
// render () {
//   return (
//       <div className='container-fluid'>
//         <div className='row'>
//         {renderVideoGames}
//         </div>
//       </div>
//   )
// }
// }

export default VideoGamesList
