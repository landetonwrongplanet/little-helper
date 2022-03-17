export const state = () => ({
  emotions: [{
    image: 'Bild glücklich',
    declaration: 'Diese Person sieht glücklich aus',
    done: false,
    date: '1629270742839'
  }, {
    image: 'Bild traurig',
    declaration: 'Diese Person sieht traurig aus',
    done: true,
    date: '1629270742839'
  }, {
    image: 'Bild wütend',
    declaration: 'Diese Person sieht wütend aus',
    done: false,
    date: '1629270742839'
  }, {
    image: 'Bild müde',
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
