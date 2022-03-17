
export const state = () => ({
  entries: [{
    title: 'Stress in der Schule',
    entry: 'Heute habe ich meine Hausaufgaben vergessen! Welch eine Schande!',
    done: false,
    date: '1629270742839'
  }, {
    title: 'Haustier verletzt',
    entry: 'Heute morgen rutschte mein Goldfisch im Wohnzimmer auf seiner Flosse aus',
    done: true,
    date: '1629270742839'
  }, {
    title: 'Mühe mit Kochen',
    entry: 'Meine Pfanne wurde zu heiss, das Schnitzel verkohlt',
    done: false,
    date: '1629270742839'
  }, {
    title: 'Fauxpas beim Hobby',
    entry: 'Beim Celloüben riss mir eine Saite. ',
    done: false,
    date: '1629270742839'
  }]
})
export const mutations = {
  addEntry (state, addedEntry) {
    state.entries.push({
      title: addedEntry.title,
      entry: addedEntry.entry,
      done: false,
      date: addedEntry.date
    })
  },
  deleteEntry (state, deletedEntry) {
    const entryIndex = state.entries.indexOf(deletedEntry)
    state.entries.splice(entryIndex, 1)
  },
  updateEntry (state, updatedEntry) {
    const entryIndex = state.entries.indexOf(updatedEntry.old)
    state.entries[entryIndex].title = updatedEntry.new.title
    state.entries[entryIndex].entry = updatedEntry.new.entry
  }

}
