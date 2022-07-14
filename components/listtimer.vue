<template>
  <div>
    <div>
      <times
        v-for="(timer,key) in times"
        :key="key"
        :times="timer"
        @delete-times="deleteTime"
      />
    </div>
  </div>
</template>

<script type = "text/javascript" >
import Times from './edittimer.vue'

export default {
  components: {
    Times
  },
  props: {
    times: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    }
  },
  methods: {
    deleteTime (Timer) {
      const timeIndex = this.times.indexOf(Timer)
      this.times.splice(timeIndex, 1)
    }
  }
}
</script> -->
<style>
</style>
