export const state = () => ({
  emotions: [{
    image: 'Hausaufgaben vergessen',
    declaration: 'Heute habe ich meine Hausaufgaben vergessen! Welch eine Schande!',
    done: false,
    date: '1629270742839'
  }, {
    image: 'Goldfisch rutschte auf dem Parkett aus',
    declaration: 'Heute morgen rutschte mein Goldfisch im Wohnzimmer auf seiner Flosse aus',
    done: true,
    date: '1629270742839'
  }, {
    image: 'Essen verbrannt',
    declaration: 'Meine Pfanne wurde zu heiss, das Schnitzel verkohlt',
    done: false,
    date: '1629270742839'
  }, {
    image: 'Cellosaite gerissen',
    declaration: 'Beim Celloüben riss mir eine Saite. ',
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
