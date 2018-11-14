import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createVideoGame, fetchVideoGame, updateVideoGame } from '../actions/videoGameActions'

class VideoGameForm extends Component {
  constructor(props) {
    super(props)

    const video_game = this.props.video_game
    this.state = {
      id: video_game ? video_game.id : null,
      name: video_game ? video_game.name : '',
      age_range: video_game ? video_game.age_range : '',
      pic_url: video_game ? video_game.pic_url : '',
      description: video_game ? video_game.description : ''
    }
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      name: nextProps.video_game.name,
      age_range: nextProps.video_game.age_range,
      pic_url: nextProps.video_game.pic_url,
      description: nextProps.video_game.description
    })
  }

  componentDidMount = () => {
    const id = this.props.match.params.video_gameId
    if (id) {
      this.props.fetchVideoGame(id)
    }
  }

  handleChange = e => {
    const {name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { createVideoGame, updateVideoGame } = this.props
    const { id } = this.state

    if (id) {
      updateVideoGame(this.state)
      this.props.history.push(`/video_games/${id}`)
    } else {
      createVideoGame(this.state, this.props.history)
    }
  }

  render() {
    const { id } = this.props.video_game
    
    return (
      <div className='container text-center'>
        <form onSubmit={e => this.handleSubmit(e, id ? id : false)}>
          <div>
            <label>Video Game Name: </label>
            <input
              type='text'
              onChange={e => this.handleChange(e)}
              name='name'
              value={this.state.name}
              />
            </div> 
            <div>
            <label>Age Range: </label>
            <input
              type='text'
              onChange={e => this.handleChange(e)}
              name='age_range'
              value={this.state.age_range}
              />
            </div>
            <div>
            <label>Pic URL: </label>
            <input
              type='text'
              onChange={e => this.handleChange(e)}
              name='pic_url'
              value={this.state.pic_url}
              />
            </div>
            <div>
            <label>Description: </label>
            <textarea
              type='text'
              onChange={e => this.handleChange(e)}
              name='description'
              value={this.state.description}
              />
            </div>
            <div>
              <input type='submit' />
            </div>      
        </form>
      </div>
      )
  }
}

const mapStateToProps =(state, myProps) => {

  const video_game = state.video_games.find(video_game => video_game.id === parseInt(myProps.match.params.video_gameId, 10))


  if (video_game) {
    return { video_game }
  } else {
    return {
      video_game: {}
    }
  }
}

export default connect(mapStateToProps, { createVideoGame, fetchVideoGame, updateVideoGame})(VideoGameForm)