import fetch from 'isomorphic-fetch';

const url = '/api/video_games'

const getVideoGames = video_games => {
  return {
    type: 'FETCH_VIDEO_GAMES',
    video_games
  }
}

const videoGameFetched = video_game => {
  return {
    type: 'VIDEO_GAME_FETCHED',
    video_game
  }
}

const addVideoGame = video_game => {
  return {
    type: 'ADD_VIDEO_GAME',
    video_game
  }
}

const editVideoGame = video_game => {
  return {
    type: 'UPDATE_VIDEO_GAME',
    video_game
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
      .then(video_games => dispatch(getVideoGames(video_games)))
  }
}

export const fetchVideoGame = id => {
  console.log("Fire in the hole")
  return dispatch => {
    fetch(`/api/video_games/${id}`)
      .then(res => res.json())
      .then(video_game => dispatch(videoGameFetched(video_game)))
  }
}

export const createVideoGame = (video_game, history) => {
  return dispatch => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(video_game)
    })
      .then(res => res.json())
      .then(video_game => {
        dispatch(addVideoGame(video_game))
      })
      .catch(error => console.log(error))
  }
}

export const updateVideoGame = video_game => {
  // console.log('updateVideoGame is being called')
  return dispatch => {
    return fetch(url + `/${video_game.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(video_game)
    })
    .then(res => res.json())
    .then(video_game => {
      dispatch(editVideoGame(video_game))
    })
    .catch(error => console.log(error))
  }
}

export const deleteVideoGame = video_game => {
  return dispatch => {
    return fetch(url +`/${video_game.id}`, {
      method: 'DELETE'
    })
    .then(res => {
      dispatch(removeVideoGame(video_game.id))
    })
    .catch(error => console.log(error))
  }
}