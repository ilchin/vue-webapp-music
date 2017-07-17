export const singer = state => state.singer
export const playing = state => state.playing
export const fullScreen = state => state.fullScreen
export const playList = state => state.playList
export const sequenceList = state => state.sequenceList
export const currentIndex = state => state.currentIndex
export const mode = state => state.mode
export const currentSong = function (state) {
  return state.playList[state.currentIndex]
}

export const diss = state => state.diss
export const topList = state => state.topList
export const searchHistory = state => state.searchHistory
export const favoriteList = state => state.favoriteList
export const playHistory = state => state.playHistory