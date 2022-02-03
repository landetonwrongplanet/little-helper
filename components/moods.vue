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
import Mood from './mood.vue'

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
    }
  }
}

</script>
<style>
</style>
