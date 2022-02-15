export const state = () => ({
  notes: [{
    title: 'Hausaufgaben vergessen',
    entry: 'Heute habe ich meine Hausaufgaben vergessen! Welch eine Schande!',
    done: false,
    date: '1629270742839'
  }, {
    title: 'Goldfisch rutschte auf dem Parkett aus',
    entry: 'Heute morgen rutschte mein Goldfisch im Wohnzimmer auf seiner Flosse aus',
    done: true,
    date: '1629270742839'
  }, {
    title: 'Essen verbrannt',
    entry: 'Meine Pfanne wurde zu heiss, das Schnitzel verkohlt',
    done: false,
    date: '1629270742839'
  }, {
    title: 'Cellosaite gerissen',
    entry: 'Beim Celloüben riss mir eine Saite. ',
    done: false,
    date: '1629270742839'
  }]
})
export const mutations = {
  addNote (state, addedNote) {
    state.notes.push({
      title: addedNote.title,
      entry: addedNote.entry,
      done: false,
      date: addedNote.date
    })
  },
  deleteNote (state, deletedNote) {
    const noteIndex = state.notes.indexOf(deletedNote)
    state.notes.splice(noteIndex, 1)
  },
  updateEntry (state, updatedNote) {
    const noteIndex = state.notes.indexOf(updatedNote.old)
    state.notes[noteIndex].title = updatedNote.new.title
    state.notes[noteIndex].entry = updatedNote.new.entry
  }
}
