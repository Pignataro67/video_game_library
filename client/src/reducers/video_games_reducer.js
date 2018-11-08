export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_VIDEO_GAMES':
          return action.videoGames
        case 'VIDEO_GAME_FETCHED':
          const index = state.findIndex(videoGame => videoGame.id === action.videoGame.id)
          if (index > -1) {
            return state.map(videoGame => {
              if (videoGame.id === action.videoGame.id) {
                return action.videoGame
              } else {
                return videoGame
              }
            })
          } else {
            return [...state, action.videoGame]
          }
          
        case 'ADD_VIDEO_GAME':
          return [...state, action.videoGame]
        case 'UPDATE_VIDEO_GAME':
          return [...state.filter(videoGame => videoGame.id !== action.videoGame.id), action.videoGame]  
        case 'DELETE_TOY':
          return state.filter(videoGame => videoGame.id !== action.id)
        default:
          return state
    }
}