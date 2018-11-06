import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addVideoGame } from '../actions/videoGameActions'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/videoGameActions'

class videoGameForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      age_range: '',
      pic_url: '',
      description: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
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
        </form>
      </div>
      )
  }


}