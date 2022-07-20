<!-- App.vue -->
<template>
  <div id="app">
    <BaseTimer
      :time-left="timeLeft"
    />
    <p style="font-size:50px; float: left;transform:rotate(90deg); margin: 25px;" @click="startTimer()" v-on:click="toggleDiv">
      &#128316;
    </p>
    <p v-if="toggle" style="font-size:50px; float: left ;margin: 25px;" @click="stopTimer()">
      &#9208;
    </p>
    <p style="font-size:50px ; float: left;margin: 25px;" @click="resetTimer()">
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
      timePassed: 0,
      toggle: false
    }
  },
  computed: {
    timeLeft () {
      return this.timeLimit - this.timePassed
    }
  },
  methods: {
    startTimer () {
      this.timerInterval = setInterval(() => {
        this.timePassed += 1
        if (this.timeLeft === 0) {
          clearInterval(this.timerInterval)
        }
      }, 1000)
    },
    stopTimer () {
      clearInterval(this.timerInterval)
    },
    resetTimer () {
      console.log('hallo')
      this.timePassed = 0
    },
    toggleDiv () {
      this.toggle = !this.toggle
    }
  }
}
</script>
