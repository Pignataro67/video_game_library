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

  
}