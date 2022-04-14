export const state = () => ({
  emotions: [{
    image: 'glücklich-a.jpg',
    declaration: 'Diese Person sieht glücklich aus',
    done: false
  }, {
    image: 'traurig-a.jpg',
    declaration: 'Diese Person sieht traurig aus',
    done: true
  }, {
    image: 'sauer-a.jpg',
    declaration: 'Diese Person sieht wütend aus',
    done: false
  }, {
    image: 'müde-a.jpg',
    declaration: 'Diese Person sieht müde aus',
    done: false
  }, {
    image: 'genervt-a.jpg',
    declaration: 'Diese Person sieht genervt aus',
    done: false
  }, {
    image: 'verletzt2-a.jpg',
    declaration: 'Diese Person sieht verletzt aus',
    done: false
  }, {
    image: 'erschrocken-a.jpg',
    declaration: 'Diese Person sieht erschrocken aus',
    done: false
  }, {
    image: 'ängstlich-a.jpg',
    declaration: 'Diese Person sieht ängstlich aus',
    done: false
  }, {
    image: 'gelangweilt-a.jpg',
    declaration: 'Diese Person sieht gelangweilt aus',
    done: false
  }, {
    image: 'interessiert-a.jpg',
    declaration: 'Diese Person sieht interessiert aus',
    done: false
  }, {
    image: 'verwirrt2-a.jpg',
    declaration: 'Diese Person sieht verwirrt aus',
    done: false
  }, {
    image: 'skeptisch-a .jpg',
    declaration: 'Diese Person sieht skeptisch aus',
    done: false
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
