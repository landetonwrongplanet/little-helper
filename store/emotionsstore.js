export const state = () => ({
  emotions: [{
    image: 'glücklich-a.jpg',
    declaration: 'Diese Person sieht glücklich aus',
    done: false,
    date: '1629270742839'
  }, {
    image: 'traurig-a.jpg',
    declaration: 'Diese Person sieht traurig aus',
    done: true,
    date: '1629270742839'
  }, {
    image: 'sauer-a.jpg',
    declaration: 'Diese Person sieht wütend aus',
    done: false,
    date: '1629270742839'
  }, {
    image: 'müde-a.jpg',
    declaration: 'Diese Person sieht müde aus',
    done: false,
    date: '1629270742839'
  }, {
    image: 'skeptisch-a.jpg',
    declaration: 'Diese Person sieht müde aus',
    done: false,
    date: '1629270742839'
  }, {
    image: 'genervt-a.jpg',
    declaration: 'Diese Person sieht müde aus',
    done: false,
    date: '1629270742839'
  }, {
    image: 'verletzt2-a.jpg',
    declaration: 'Diese Person sieht müde aus',
    done: false,
    date: '1629270742839'
  }, {
    image: 'erschrocken-a.jpg',
    declaration: 'Diese Person sieht müde aus',
    done: false,
    date: '1629270742839'
  }, {
    image: 'ängstlich-a.jpg',
    declaration: 'Diese Person sieht müde aus',
    done: false,
    date: '1629270742839'
  }, {
    image: 'gelangweilt-a.jpg',
    declaration: 'Diese Person sieht müde aus',
    done: false,
    date: '1629270742839'
  }, {
    image: 'interessiert-a.jpg',
    declaration: 'Diese Person sieht müde aus',
    done: false,
    date: '1629270742839'
  }, {
    image: 'verwirrt2-a.jpg',
    declaration: 'Diese Person sieht müde aus',
    done: false,
    date: '1629270742839'
  }]
})
export const mutations = {
  addEmotion (state, addedEmotion) {
    state.emotions.push({
      image: addedEmotion.image,
      declaration: addedEmotion.declaration,
      done: false,
      date: addedEmotion.date
    })
  },
  deleteEmotion (state, deletedEmotion) {
    const emotionIndex = state.emotions.indexOf(deletedEmotion)
    state.socials.splice(emotionIndex, 1)
  },
  updateEmotion (state, updatedEmotion) {
    const emotionIndex = state.emotions.indexOf(updatedEmotion.old)
    state.emotions[emotionIndex].image = updatedEmotion.new.image
    state.emotions[emotionIndex].declaration = updatedEmotion.new.declaration
  }
}
