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
        <NuxtLink to="/apocare">
          Medical Intervention
        </NuxtLink><br>
        <NuxtLink to="/diaryboard">
          Diary
        </NuxtLink><br>
        <NuxtLink to="/socially">
          Social competences
        </NuxtLink>
      </div>
    </div>
    <div>
      <storeNote :notes="notes" />
      <createNote @create-note="addNote" />
    </div>
  </div>
</template>

<script>
import storeNote from '~/components/listnotes.vue'
import createNote from '~/components/createnote.vue'
export default {
  name: 'App',
  components: {
    storeNote,
    createNote
  },
  data () {
    return {
    }
  },
  computed: {
    notes () {
      return this.$store.state.notestore.notes
    }
  },
  methods: {
    addNote (addedNote) {
      this.$store.commit('notestore/addNote', addedNote)
    }
  }
}
</script>
