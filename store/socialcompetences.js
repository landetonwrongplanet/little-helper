export const state = () => ({
  mobiledoc: [{
    kardextitle: 'Hausaufgaben vergessen',
    kardextext: 'Heute habe ich meine Hausaufgaben vergessen! Welch eine Schande!',
    done: false,
    date: '1629270742839'
  }, {
    kardextitle: 'Goldfisch rutschte auf dem Parkett aus',
    kardextext: 'Heute morgen rutschte mein Goldfisch im Wohnzimmer auf seiner Flosse aus',
    done: true,
    date: '1629270742839'
  }, {
    kardextitle: 'Essen verbrannt',
    kardextext: 'Meine Pfanne wurde zu heiss, das Schnitzel verkohlt',
    done: false,
    date: '1629270742839'
  }, {
    kardextitle: 'Cellosaite gerissen',
    kardextext: 'Beim Celloüben riss mir eine Saite. ',
    done: false,
    date: '1629270742839'
  }]
})
export const mutations = {
  addMedicalMemo (state, addedMedicalMemo) {
    state.mobiledoc.push({
      kardextitle: addedMedicalMemo.kardextitle,
      kardextext: addedMedicalMemo.kardextext,
      done: false,
      date: addedMedicalMemo.date
    })
  },
  deleteMedicalMemo (state, deletedMedicalMemo) {
    const medicalIndex = state.mobiledoc.indexOf(deletedMedicalMemo)
    state.mobiledoc.splice(medicalIndex, 1)
  },
  updateMedicalMemo (state, updatedMedicalMemo) {
    const medicalIndex = state.mobiledoc.indexOf(updatedMedicalMemo.old)
    state.mobiledoc[medicalIndex].kardextitle = updatedMedicalMemo.new.kardextitle
    state.mobiledoc[medicalIndex].kardextext = updatedMedicalMemo.new.kardextext
  }
}
