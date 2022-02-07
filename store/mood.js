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
  }
}
