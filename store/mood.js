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
  }],
  emojis: [{
    id: 1,
    emoji: 'Emoji01.png'
  }, {
    id: 2,
    emoji: 'Emoji02.png'
  }, {
    id: 3,
    emoji: 'Emoji03.png'
  }, {
    id: 4,
    emoji: 'Emoji04.png'
  }, {
    id: 5,
    emoji: 'Emoji05.png'
  }, {
    id: 6,
    emoji: 'Emoji06.png'
  }, {
    id: 7,
    emoji: 'Emoji07.png'
  }, {
    id: 8,
    emoji: 'Emoji08.png'
  }, {
    id: 9,
    emoji: 'Emoji09.png'
  }, {
    id: 10,
    emoji: 'Emoji10.png'
  }, {
    id: 11,
    emoji: 'Emoji11.png'
  }, {
    id: 12,
    emoji: 'Emoji12.png'
  }],
  words: [{
    id: 1,
    word: 'enttäuscht'
  }, {
    id: 2,
    word: 'traurig'
  }, {
    id: 3,
    word: 'verletzt'
  }, {
    id: 4,
    word: 'gestresst'
  }, {
    id: 5,
    word: 'ängstlich'
  }, {
    id: 6,
    word: 'wütend'
  }, {
    id: 7,
    word: 'fröhlich'
  }, {
    id: 8,
    word: 'neutral'
  }, {
    id: 9,
    word: 'glücklich'
  }, {
    id: 10,
    word: 'zufrieden'
  }, {
    id: 11,
    word: 'erschöpft'
  }, {
    id: 12,
    word: 'verzweifelt'
  }, {
    id: 13,
    word: 'aufgedreht'
  }
  ]
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
