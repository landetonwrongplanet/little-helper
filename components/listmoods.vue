<template>
  <div>
    <div>
      <mood
        v-for="(mood,key) in moods"
        :key="key"
        :mood="mood"
      />
    </div>
  </div>
</template>

<script type = "text/javascript" >
import Mood from './editingmoods.vue'

export default {
  components: {
    Mood
  },
  props: {
    moods: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    }
  },
  computed: {
    methods: {
      deleteMood (mood) {
        const moodIndex = this.moods.indexOf(mood)
        this.moods.splice(moodIndex, 1)
      }
    }
  }
}

</script>
<style>
</style>
