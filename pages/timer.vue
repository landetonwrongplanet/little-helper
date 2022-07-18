<!-- App.vue -->
<template>
  <div id="app">
    <BaseTimer
      :time-left="timeLeft"
    />
  </div>
</template>
<script>
import BaseTimer from '~/components/BaseTimer'

export default {
  components: {
    BaseTimer
  },
  data () {
    return {
      timeLimit: 20,
      timerInterval: null,
      timePassed: 0
    }
  },
  computed: {
    timeLeft () {
      return this.timeLimit - this.timePassed
    }
  },
  mounted () {
    this.startTimer()
  },
  methods: {
    startTimer () {
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000)
    }
  }
}
</script>
