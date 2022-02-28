export const state = () => ({
    socials: [{
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
    addScocialTopic (state, addedSocialTopic) {
      state.socials.push({
        topictitle: addedSocialTopic.topictitle,
        topictext: addedSocialTopic.topictext,
        done: false,
        date: addedSocialTopic.date
      })
    },
    deleteSocialTopic (state, deletedSocialTopic) {
      const socialIndex = state.socials.indexOf(deletedSocialTopic)
      state.socials.splice(socialIndex, 1)
    },
    updateSocialTopic (state, updatedSocialTopic) {
      const socialIndex = state.socials.indexOf(updatedSocialTopic.old)
      state.socials[socialIndex].topictitle = updatedSocialTopic.new.topictitle
      state.socials[socialIndex].topictext = updatedSocialTopic.new.topictext
    }
  }
  