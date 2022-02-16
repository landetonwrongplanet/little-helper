<template>
  <div class="wrapper">
    <div class="title">
      <h1>
        Dokumentiere Deine Stimmung
      </h1>
    </div>
    <div class="title">
      <NuxtLink to="/diaryboard">
        Diary
      </NuxtLink><br>
      <NuxtLink to="/apocare">
          Medical Intervention
        </NuxtLink><br>
        <NuxtLink to="/notes">
        Notes
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
import Moods from '~/components/listmoods'
import CreateMood from '~/components/createmood.vue'

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
