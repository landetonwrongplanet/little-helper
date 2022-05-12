export const state = () => ({
  times: [{
    topictitle: 'Küche putzen',
    topictext: '30 min',
    done: false
  }, {
    topictitle: 'Wohnung aufräumen',
    topictext: '2h',
    done: true
  }, {
    topictitle: 'Badezimmer putzen und saugen',
    topictext: '1h',
    done: false
  }, {
    topictitle: 'Pflanzen pflegen',
    topictext: '30min',
    done: false
  }]
})
export const mutations = {
  addTime (state, addedTime) {
    state.times.push({
      topictitle: addedTime.topictitle,
      topictext: addedTime.topictext,
      done: false
    })
  },
  deleteTime (state, deletedTime) {
    const timeIndex = state.times.indexOf(deletedTime)
    state.times.splice(timeIndex, 1)
  },
  updateTime (state, updatedTime) {
    const timeIndex = state.times.indexOf(updatedTime.old)
    state.times[timeIndex].topictitle = updatedTime.new.topictitle
    state.times[timeIndex].topictext = updatedTime.new.topictext
  }
}
