<template>
  <div class="wrapper">
    <div class="title">
      <h1>
        Dokumentiere Deine Stimmung
      </h1>
    </div>
    <div class="title">
      <NuxtLink to="/">
        Diary
      </NuxtLink>
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
import Moods from '~/components/moods'
import CreateMood from '~/components/createmoodeintrag.vue'
export default {
  components: {
    Moods,
    CreateMood
  },
  computed: {
    moods () {
      return this.$store.state.mood.moods
    }
  },
  methods: {
    addMood (addedMood) {
      this.$store.commit('mood/addMood', addedMood)
    }
  }
}

</script>
