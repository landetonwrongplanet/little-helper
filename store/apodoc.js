export const state = () => ({
  mobiledoc: [{
    kardextitle: 'Diagnosen',
    kardextext: 'Asperger, Migräne',
    done: false,
    date: '1629270742839'
  }, {
    kardextitle: 'Medikamente',
    kardextext: 'Täglich 2 Tropfen Vitamin D3',
    done: true,
    date: '1629270742839'
  }, {
    kardextitle: 'Hilfe bei Overload',
    kardextext: 'Stimmingtools, aus der Situation gehen, Noise Cancelling Kopfhörer anziehen',
    done: false,
    date: '1629270742839'
  }, {
    kardextitle: 'Kontaktdaten Therapeut',
    kardextext: 'Herr Dr. Max Mustermann, Twofoldstrasse 1 2222 Oerlikon, 01379 10 11 12',
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