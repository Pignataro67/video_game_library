import fetch from 'isomorphic-fetch';

export const FETCH_VIDEO_GAMES = 'FETCH_VIDEO_GAMES'

const url = '/api/video_games'

const getVideoGames = videoGames => {
  return {
    type: 'FETCH_VIDEO_GAMES',
    videoGames
  }
}

const videoGameFetched = videoGame => {
  return {
    type: 'VIDEO_GAME_FETCHED',
    videoGame
  }
}

const addVideoGame = videoGame => {
  return {
    type: 'ADD_VIDEO_GAME',
    videoGame
  }
}

const editVideoGame = videoGame => {
  return {
    type: 'UPDATE_VIDEO_GAME',
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

export const fetchVideoGame = id => {
  console.log("Fire in the hole")
  return dispatch => {
    fetch(`/api/video_games/${id}`)
      .then(res => res.json())
      .then(videoGame => dispatch(videoGameFetched(videoGame)))
  }
}

export const createVideoGame = (video_game, history) => {
  console.log('C')
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
        console.log('D')
        dispatch(addVideoGame(video_game))
      })
      .catch(error => console.log(error))
  }
  // console.log("E")
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