<template>
  <div>
    <div class="wrapper">
      <div class="title">
        <h1>Dies ist dein persönliches Tagebuch📝</h1>
      </div>
      <div class="title">
        <NuxtLink to="/moodboard">
          Mood validation
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
