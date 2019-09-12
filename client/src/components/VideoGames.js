import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/videoGameActions';

class VideoGames extends Component {
  componentWillMount() {
    const { actions } = this.props
    actions.fetchVideoGames()
  }

  render() {
 

    const { videoGames } = this.props
    console.log(videoGames)

    const renderVideoGames = videoGames.map(videoGame =>
      <div key={videoGame.id} className="container text-center">
        <p>Video Game: {videoGame.name}</p>
        <p>Age Range: {videoGame.age_range}</p>
        <img src={`${videoGame.pic_url}`} style={{height: '400px', width: '300px', margin: 'auto'}} alt={videoGame.name} />
      </div>
      );

    return(
      <div>
        {renderVideoGames}
      </div>
      );
    }
  }

  const mapStateToProps = state => {
    console.log("this is your state")
    console.log(state.videoGames)
    return { videoGames: state.videoGames }
  }

  const mapDispatchToProps = dispatch => {
    return {actions: bindActionCreators(actions, dispatch)}
  }

  export default connect(mapStateToProps, mapDispatchToProps)(VideoGames);