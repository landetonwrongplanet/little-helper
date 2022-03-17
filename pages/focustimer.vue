<template>
  <div>
    <div class="wrapper">
      <div class="title">
        <h1>Dies ist dein focus-timer</h1>
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
      <times :times="timer" />
      <createTimes @create-time="addTime" />
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
    timer () {
      return this.$store.state.timerstore.times
    }
  },
  methods: {
    addTime (addedTime) {
      this.$store.commit('timerstore/addTime', addedTime)
    }
  }
}
</script>
