<template>
  <div>
    <div class="wrapper">
      <div class="title">
        <h1>Dies ist dein Sozialkompetenzen-Glossar</h1>
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
        <NuxtLink to="/notes">
          Notes
        </NuxtLink><br>
        <NuxtLink to="/learnemotions">
          Learn emotions
        </NuxtLink><br>
      </div>
    </div>
    <div>
      <times :times="Timer" />
      <createTimes @create-time="addTimer" />
    </div>
  </div>
</template>

<script>
import times from '~/components/listtimer.vue'
import createTimes from '~/components/createtimer.vue'
export default {
  name: 'App',
  components: {
    times,
    createTimes
  },
  data () {
    return {
    }
  },
  computed: {
    Timer () {
      return this.$store.state.timestore.times
    }
  },
  methods: {
    addTimer (addedTimer) {
      this.$store.commit('timerstore/addTimer', addedTimer)
    }
  }
}
</script>
