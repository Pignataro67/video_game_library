import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createVideoGame, fetchVideoGame, updateVideoGame } from '../actions/videoGameActions'

class VideoGameForm extends Component {
  constructor(props) {
    super(props)

    const videoGame = this.props.videoGame
    this.state = {
      id: videoGame ? videoGame.id : null,
      name: videoGame ? videoGame.name : '',
      age_range: videoGame ? videoGame.age_range : '',
      pic_url: videoGame ? videoGame.pic_url : '',
      description: videoGame ? videoGame.description : ''
    }
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      name: nextProps.videoGame.name,
      age_range: nextProps.videoGame.age_range,
      pic_url: nextProps.videoGame.pic_url,
      description: nextProps.videoGame.description
    })
  }

  componentDidMount = () => {
    const id = this.props.match.params.videoGameId
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
      this.props.history.push(`/videoGames/${id}`)
    } else {
      createVideoGame(this.state, this.props.history)
    }
  }

  render() {
    const { id } = this.props.videoGame
    // const { id } = this.props.VideoGame
    // console.log(this.props.VideoGame.id)
    // const { id } = this.props.videoGame

    // if (sendRedirect) {
    //   return (
    //     <div>
    //       {id ? <Redirect to ={`/videoGames/${id}`} /> : <Redirect to='/videoGames' />}
    //     </div>
    //   )
    // }

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
        {/* {sendRedirect && (
          <Redirect to={`/videoGames/${id}`} />
        )} */}
      </div>
      )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {actions: bindActionCreators(actions, dispatch)}
// }

const mapStateToProps =(state, myProps) => {
  // conole.log('ran map')

  const videoGame = state.videoGames.find(videoGame => videoGame.id === parseInt(myProps.match.params.videoGameId, 10))


  if (videoGame) {
  // console.log('im if')
  // console.log(videoGame)
    return { videoGame }
  } else {
  // console.log('im else')
  // console.log(videoGame)
    return {
      videoGame: {}
    }
  }
}

export default connect(mapStateToProps, { createVideoGame, fetchVideoGame, updateVideoGame})(VideoGameForm)