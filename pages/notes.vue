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
        </NuxtLink><br>
        <NuxtLink to="/learnemotions">
          Learn emotions
        </NuxtLink><br>
        <NuxtLink to="/focustimer">
          Your focustimer
        </NuxtLink>
      </div>
    </div>
    <div>
      <storeNote :notes="notes" />
      <createNote @create-note="addNote" />
      <vue-simple-markdown :source="source"></vue-simple-markdown>
    </div>
  </div>
</template>

<script>
import storeNote from '~/components/listnotes.vue'
import createNote from '~/components/createnote.vue'
// import VueMarkdown from 'vue-markdown/src/VueMarkdown'

import VueSimpleMarkdown from 'vue-simple-markdown'


export default {
  name: 'App',
  components: {
    // VueMarkdown,
    VueSimpleMarkdown,
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
