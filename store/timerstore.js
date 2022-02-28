export const state = () => ({
  times: [{
    topictitle: 'Hausaufgaben vergessen',
    topictext: 'Heute habe ich meine Hausaufgaben vergessen! Welch eine Schande!',
    done: false,
    date: '1629270742839'
  }, {
    topictitle: 'Goldfisch rutschte auf dem Parkett aus',
    topictext: 'Heute morgen rutschte mein Goldfisch im Wohnzimmer auf seiner Flosse aus',
    done: true,
    date: '1629270742839'
  }, {
    topictitle: 'Essen verbrannt',
    topictext: 'Meine Pfanne wurde zu heiss, das Schnitzel verkohlt',
    done: false,
    date: '1629270742839'
  }, {
    topictitle: 'Cellosaite gerissen',
    topictext: 'Beim Celloüben riss mir eine Saite. ',
    done: false,
    date: '1629270742839'
  }]
})
export const mutations = {
  addTime (state, addedTime) {
    state.times.push({
      topictitle: addedTime.topictitle,
      topictext: addedTime.topictext,
      done: false,
      date: addedTime.date
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
