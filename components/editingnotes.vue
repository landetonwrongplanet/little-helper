<template>
  <div>
    <div class="ui centered card">
      <div v-show="!isEditing" class="content">
        <div class="header">
          {{ note.title }}
        </div>
        <div class="meta">
          {{ note.entry }}
        </div>
        <div>
          {{ note.date | dateformat }}
        </div>
        <div class="extra content">
          <span class="right floated edit icon">
            <i class="edit icon" @click="showForm(note)" />
          </span>
          <span class="right floated trash icon">
            <i class="trash icon" @click="deleteEntry(note)" />
          </span>
        </div>
      </div>
      <div v-show="isEditing" class="content">
        <div class="ui Form">
          <div class="field">
            <label>Title</label>
            <input v-model="updatedNote.title" type="text">
          </div>
          <div class="field">
            <label>Entry</label>
            <input v-model="updatedNote.entry" type="text">
          </div>
          <div class="ui two button attached buttons">
            <button class="ui basic blue button" @click="hideForm(note)">
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
    note: {
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
      titleText: '',
      entryText: '',
      isCreating: false,
      updatedNote: {
        title: '',
        entry: ''
      }
    }
  },
  methods: {
    showForm (note) {
      this.isEditing = true
      this.updatedNote.title = note.title
      this.updatedNote.entry = note.entry
    },
    hideForm (note) {
      this.isEditing = false
      this.$store.commit('notes/updateNote', { old: note, new: this.updatedNote })
    },
    deleteNote (deletedNote) {
      this.$store.commit('notes/deleteNote', deletedNote)
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
