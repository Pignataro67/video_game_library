import { combineReducers } from 'redux'
import videoGamesReducer from './video_games_reducer'

export default combineReducers({
    video_games: videoGamesReducer
})