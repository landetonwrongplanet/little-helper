<template>
  <div>
    <div class="ui centered card">
      <div v-show="!isEditing" class="content">
        <div class="header">
          {{ medicalMemo.kardextitle }}
        </div>
        <div class="meta">
          {{ medicalMemo.kardextext }}
        </div>
        <div>
          {{ medicalMemo.date | dateformat }}
        </div>
        <div class="extra content">
          <span class="right floated edit icon">
            <i class="edit icon" @click="showForm(medicalMemo)" />
          </span>
          <span class="right floated trash icon">
            <i class="trash icon" @click="deleteMedicalMemo(medicalMemo)" />
          </span>
        </div>
      </div>
      <div v-show="isEditing" class="content">
        <div class="ui Form">
          <div class="field">
            <label>Headline</label>
            <input v-model="updatedMedicalMemo.kardextitle" type="text">
          </div>
          <div class="field">
            <label>Memo</label>
            <input v-model="updatedMedicalMemo.kardextext" type="text">
          </div>
          <div class="ui two button attached buttons">
            <button class="ui basic blue button" @click="hideForm(medicalMemo)">
              Close X
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type = "text/javascript" >

export default {
  filters: {
    dateformat (timestamp) {
      const newDate = new Date()
      newDate.setTime(timestamp)
      return newDate.toLocaleString('de-CH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })
    }
  },
  props: {
    medicalMemo: {
      type: Object,
      required: true,
      default: () => {
        return {
        }
      }
    }
  },
  data () {
    return {
      isEditing: false,
      kardexTitle: '',
      kardexText: '',
      isCreating: false,
      updatedMedicalMemo: {
        kardextitle: '',
        kardextext: ''
      }
    }
  },
  methods: {
    showForm (medicalMemo) {
      this.isEditing = true
      this.updatedMedicalMemo.kardextitle = medicalMemo.kardextitle
      this.updatedMedicalMemo.kardextext = medicalMemo.kardextext
    },
    hideForm (medicalMemo) {
      this.isEditing = false
      this.$store.commit('apodoc/updateMedicalMemo', { old: medicalMemo, new: this.updatedMedicalMemo })
    },
    deleteMedicalMemo (deletedMedicalMemo) {
      this.$store.commit('apodoc/deleteMedicalMemo', deletedMedicalMemo)
    },
    openForm () {
      this.isCreating = true
    },
    closeForm () {
      this.isCreating = false
    }
  }
}
</script>
<style>
</style>
