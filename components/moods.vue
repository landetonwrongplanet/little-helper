<template>
  <div>
    <div>
      <eintrag
        v-for="(mood,key) in moods"
        :key="key"
        :mood="mood"
      />
    </div>
  </div>
</template>

<script type = "text/javascript" >
import Eintrag from './eintrag.vue'

export default {
  components: {
    Eintrag
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
