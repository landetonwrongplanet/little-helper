<template>
  <div>
    <div class="wrapper">
      <div class="title">
        <h1>Dies ist dein persönlicher Notizbereich</h1>
      </div>
      <div class="title">
        <NuxtLink to="/moodboard">
          Mood validation
        </NuxtLink><br>
        <NuxtLink to="/diaryboard">
        Diary
        </NuxtLink>
      </div>
    </div>
    <div>
      <newNote :notes="notes" />
      <createNote @create-note="addNote" />
    </div>
  </div>
</template>

<script>
import newNote from '~/components/listnotes.vue'
import createNote from '~/components/createnote.vue'
export default {
  name: 'App',
  components: {
    newNote,
    createNote
  },
  data () {
    return {
    }
  },
  computed: {
    newNote () {
      return this.$store.state.notes.notes
    }
  },
  methods: {
    addNote (addedNote) {
      this.$store.commit('notes/addNote', addedNote)
    }
  }
}
</script>
