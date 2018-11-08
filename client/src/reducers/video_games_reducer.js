export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_VIDEO_GAMES':
          return action.videoGames
        case 'ADD_VIDEO_GAME':
          return [...state, action.videoGame]
        case 'DELETE_TOY':
          return state.filter(videoGame => videoGame.id !== action.id)
        default:
          return state
    }
}