export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_VIDEO_GAMES':
          return action.videoGames 
        default:
          // console.log('returning default state')
        return state
    }
}