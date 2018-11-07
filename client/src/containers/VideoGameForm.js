import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'
// import { createVideoGame } from '../actions/videoGameActions'
// import { bindActionCreators } from 'redux'
// import * as actions from '../actions/videoGameActions'
import { createVideoGame } from '../actions/videoGameActions'

class VideoGameForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age_range: '',
      pic_url: '',
      description: '',
      sendRedirect: false
    }
  }

  handleChange = e => {
    const {name, value, checked, type } = e.target
    this.setState({
      [name]: type === 'checkbox' ? checked : value
      // [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { createVideoGame } = this.props
    // actions.createVideoGame(e)
    createVideoGame(this.state)
    this.setState({ sendRedirect: true })
  }

  render() {
    const { sendRedirect } = this.state
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
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
        {sendRedirect && (
          <Redirect to='/videoGames' />
        )}
      </div>
      )
  }

}

// const mapDispatchToProps = dispatch => {
//   return {actions: bindActionCreators(actions, dispatch)}
// }

export default connect(null, { createVideoGame })(VideoGameForm)