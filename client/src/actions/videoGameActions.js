import fetch from 'isomorphic-fetch';

const url = 'api/videoGames'

const getVideoGames = videoGames => {
  return {
    type: 'FETCH_VIDEO_GAMES',
    videoGames
  }
}

export const fetchVideoGames = () => {
  return dispatch => {
    return fetch(url)
      .then(res => res.json())
      .then(videoGames => dispatch(getVideoGames(videoGames)))
  }
}