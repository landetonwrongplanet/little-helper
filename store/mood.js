export const state = () => ({
  moods: [

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
  }
}
