<!-- App.vue -->
<template>
  <div id="app">
    <BaseTimer
      :time-left="timeLeft"
    />
    <p style="font-size:50px; float: left;transform:rotate(90deg); margin: 25px;" @click="startTimer()">
      &#128316;
    </p>
    <p style="font-size:50px; float: left ;margin: 25px;">
      &#9208;
    </p>
    <p style="font-size:50px ; float: left;margin: 25px;">
      &#9210;
    </p>
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
      this.timerInterval = setInterval(() => {
        this.timePassed += 1
        if (this.timeLeft === 0) {
          clearInterval(this.timerInterval)
        }
      }, 1000)
    }
  }
}
</script>
