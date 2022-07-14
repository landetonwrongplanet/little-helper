<!-- App.vue -->
<template>
  <div id="app">
    <BaseTimer
      :time-left="timeLeft"
    />
  </div>
</template>
<script>
import BaseTimer from './components/BaseTimer'

export default {
  components: {
    BaseTimer
  },
  computed: {
    data () {
      return {
        timeLimit: 20,
        timePassed: 0
      }
    },

    computed: {
      timeLeft () {
        return this.timeLimit - this.timePassed
      }
    },
    formattedTimeLeft () {
      const timeLeft = this.timeLeft

      const minutes = Math.floor(timeLeft / 60)
      let seconds = timeLeft % 60
      if (seconds < 10) {
        seconds = `0${seconds}`
      }

      // The output in MM:SS format
      return `${minutes}:${seconds}`
    }
  }
}
</script>
