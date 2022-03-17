<template>
  <div>
    <div class="wrapper">
      <div class="title">
        <h1>Dies ist dein persönliches Tagebuch📝 Hier kannst du ausserdem auch deine Stimmung tracken</h1>
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
    <div>
      <div>
        <Moods :moods="moods" />
        <CreateMood @create-mood="addMood" />
      </div>
    </div>
  </div>
</template>
<script>
import diaryEntry from '~/components/listentries'
import createEntry from '~/components/createentry.vue'
import Moods from '~/components/listmoods'
import CreateMood from '~/components/createmood.vue'

export default {
  name: 'App',
  components: {
    diaryEntry,
    createEntry,
    Moods,
    CreateMood
  },
  data () {
    return {
    }
  },
  computed: {
    entries () {
      return this.$store.state.diary.entries
    },
    moods () {
      return this.$store.state.mood.moods
    }
  },
  methods: {
    addEntry (addedEntry) {
      this.$store.commit('diary/addEntry', addedEntry)
    },
    addMood (addedMood) {
      this.$store.commit('mood/addMood', addedMood)
    }
  }
}

</script>
