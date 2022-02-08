<template>
  <div>
    <div class="ui centered card">
      <div v-show="!isEditing" class="content">
        <div class="header">
          {{ entry.title }}
        </div>
        <div class="meta">
          {{ entry.entry }}
        </div>
        <div>
          {{ entry.date | dateformat }}
        </div>
        <div class="extra content">
          <span class="right floated edit icon">
            <i class="edit icon" @click="showForm(entry)" />
          </span>
          <span class="right floated trash icon">
            <i class="trash icon" @click="deleteEntry(entry)" />
          </span>
        </div>
      </div>
      <div v-show="isEditing" class="content">
        <div class="ui Form">
          <div class="field">
            <label>Title</label>
            <input v-model="updatedEntry.title" type="text">
          </div>
          <div class="field">
            <label>Entry</label>
            <input v-model="updatedEntry.entry" type="text">
          </div>
          <div class="ui two button attached buttons">
            <button class="ui basic blue button" @click="hideForm(entry)">
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
    entry: {
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
      updatedEntry: {
        title: '',
        entry: ''
      }
    }
  },
  methods: {
    showForm (entry) {
      this.isEditing = true
      this.updatedEntry.title = entry.title
      this.updatedEntry.entry = entry.entry
    },
    hideForm (entry) {
      this.isEditing = false
      this.$store.commit('diary/updateEntry', { old: entry, new: this.updatedEntry })
    },
    deleteEntry (deletedEntry) {
      this.$store.commit('diary/deleteEntry', deletedEntry)
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
