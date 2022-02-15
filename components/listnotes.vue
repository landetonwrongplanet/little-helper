<template>
  <div>
    <div>
      <Note
        v-for="(note,key) in notes"
        :key="key"
        :note="note"
        @delete-note="deleteNote"
      />
    </div>
  </div>
</template>

<script type = "text/javascript" >
import Note from './editingnotes.vue'

export default {
  components: {
    Note
  },
  props: {
    notes: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    }
  },
  methods: {
    deleteNote (note) {
      const noteIndex = this.notes.indexOf(note)
      this.notes.splice(noteIndex, 1)
    }
  }
}

</script>
<style>
</style>
