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
      <vue-markdown :source="source" :plugins='plugins' > </vue-markdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from '@adapttive/vue-markdown'
import taskLists from 'markdown-it-task-lists'
import storeNote from '~/components/listnotes.vue'
import createNote from '~/components/createnote.vue'

export default {
  name: 'App',
  components: {
    VueMarkdown,
    storeNote,
    createNote
  },
  data () {
    return {
      plugins: [
        {
          plugin: taskLists,
          options: { enabled: this.taskLists }
        }
      ],
      source: '- [ ] blabla'
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
