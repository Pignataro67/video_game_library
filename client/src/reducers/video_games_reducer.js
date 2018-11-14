export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_VIDEO_GAMES':
          return action.video_games
        case 'VIDEO_GAME_FETCHED':
          const index = state.findIndex(video_game => video_game.id === action.video_game.id)
          if (index > -1) {
            return state.map(video_game => {
              if (video_game.id === action.video_game.id) {
                return action.video_game
              } else {
                return video_game
              }
            })
          } else {
            return [...state, action.video_game]
          }

        case 'ADD_VIDEO_GAME':
          return [...state, action.video_game]
        case 'UPDATE_VIDEO_GAME':
          return state.map(video_game => video_game.id === action.video_game.id ? action.video_game : video_game)  
        case 'DELETE_TOY':
          return state.filter(video_game => video_game.id !== action.id)
        default:
          return state
    }
}