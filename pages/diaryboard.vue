<template>
  <div>
    <div class="wrapper">
      <div class="title">
        <h1>Dies ist dein persönliches Tagebuch📝</h1>
      </div>
      <div class="title">
        <NuxtLink to="/moodboard">
          Mood validation
        </NuxtLink><br>
        <NuxtLink to="/apocare">
          Medical Intervention
        </NuxtLink><br>
        <NuxtLink to="/notes">
          Notes
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
      <diaryEntry :entries="entries" />
      <createEntry @create-entry="addEntry" />
    </div>
  </div>
</template>

<script>
import diaryEntry from '~/components/listentries'
import createEntry from '~/components/createentry.vue'
export default {
  name: 'App',
  components: {
    diaryEntry,
    createEntry
  },
  data () {
    return {
    }
  },
  computed: {
    entries () {
      return this.$store.state.diary.entries
    }
  },
  methods: {
    addEntry (addedEntry) {
      this.$store.commit('diary/addEntry', addedEntry)
    }
  }
}

</script>
