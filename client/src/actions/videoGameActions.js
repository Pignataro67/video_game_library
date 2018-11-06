import fetch from 'isomorphic-fetch';

const url = 'api/videoGames'

const getVideoGames = videoGames => {
  return {
    type: 'FETCH_VIDEO_GAMES',
    videoGames
  }
}

const addVideoGame = videoGame => {
  return {
    type: 'ADD_VIDEO_GAME',
    videoGame
  }
}

export const fetchVideoGames = () => {
  return dispatch => {
    return fetch(url)
      .then(res => res.json())
      .then(videoGames => dispatch(getVideoGames(videoGames)))
  }
}

export const createVideoGame = videoGame => {
  
}