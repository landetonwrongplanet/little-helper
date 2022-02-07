export const state = () => ({
  moods: [{
    moods: 'Emoji01.png',
    words: 'verletzt',
    scale: 3,
    date: '1629270742839'
  }, {
    moods: 'Emoji04.png',
    words: 'enttäuscht',
    scale: 5,
    date: '1629270742839'
  }, {
    moods: 'Emoji08.png',
    words: 'glücklich',
    scale: 9,
    date: '1629270742839'
  }, {
    moods: 'Emoji12.png',
    words: 'neutral',
    scale: false,
    date: '1629270742839'
  }]
})
export const mutations = {
  addMood (state, addedMood) {
    state.moods.push({
      moods: addedMood.moods,
      words: addedMood.words,
      scale: addedMood.scale,
      date: addedMood.date
    })
    console.log(state.moods)
  },
  deleteMood (state, deletedMood) {
    const moodIndex = state.moods.indexOf(deletedMood)
    state.moods.splice(moodIndex, 1)
  },
  updateMood (state, updatedMood) {
    const moodIndex = state.moods.indexOf(updatedMood.old)
    state.moods[moodIndex].moods = updatedMood.new.moods
    state.moods[moodIndex].words = updatedMood.new.words
    state.moods[moodIndex].scale = updatedMood.new.scale
  }
}
