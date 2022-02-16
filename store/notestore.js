export const state = () => ({
  notes: [{
    headline: 'Hausaufgaben vergessen',
    memo: 'Heute habe ich meine Hausaufgaben vergessen! Welch eine Schande!',
    done: false,
    date: '1629270742839'
  }, {
    headline: 'Goldfisch rutschte auf dem Parkett aus',
    memo: 'Heute morgen rutschte mein Goldfisch im Wohnzimmer auf seiner Flosse aus',
    done: true,
    date: '1629270742839'
  }, {
    headline: 'Essen verbrannt',
    memo: 'Meine Pfanne wurde zu heiss, das Schnitzel verkohlt',
    done: false,
    date: '1629270742839'
  }, {
    headline: 'Cellosaite gerissen',
    memo: 'Beim Celloüben riss mir eine Saite. ',
    done: false,
    date: '1629270742839'
  }]
})
export const mutations = {
  addNote (state, addedNote) {
    state.notes.push({
      headline: addedNote.headline,
      memo: addedNote.memo,
      done: false,
      date: addedNote.date
    })
  },
  deleteNote (state, deletedNote) {
    const noteIndex = state.notes.indexOf(deletedNote)
    state.notes.splice(noteIndex, 1)
  },
  updateNote (state, updatedNote) {
    const noteIndex = state.notes.indexOf(updatedNote.old)
    state.notes[noteIndex].headline = updatedNote.new.headline
    state.notes[noteIndex].memo = updatedNote.new.memo
  }
}
