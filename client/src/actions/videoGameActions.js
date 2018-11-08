import fetch from 'isomorphic-fetch';

const url = '/api/videoGames'

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

const removeVideoGame = id => {
  return {
    type: 'DELETE_VIDEO_GAME',
    id
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
  return dispatch => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(videoGame)
    })
      .then(res => res.json())
      .then(videoGame => {
        dispatch(addVideoGame(videoGame))
      })
  }
}

export const deleteVideoGame = videoGame => {
  return dispatch => {
    return fetch(url + `/${videoGame.id}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (res.ok) {
        dispatch(removeVideoGame(videoGame.id))
      } else {
        window.alert('ERROR, ERROR cannot delete video game')
      }
    })
    .catch(error => console.log(error))
  }
}