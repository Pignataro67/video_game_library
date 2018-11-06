export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_VIDEO_GAMES':
          return action.videoGames
        case 'ADD_VIDEO_GAME':
          return [...state, action.videoGame]
        default:
          return state
    }
}