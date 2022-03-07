<template>
  <div>
    <div>
      <emotions
        v-for="(Emotion,key) in Emotion"
        :key="key"
        :emotion-images="Emotion"
        @delete-emotion="deleteEmotion"
      />
    </div>
  </div>
</template>

<script type = "text/javascript" >
import Emotions from './editemotion.vue'

export default {
  components: {
    Emotions
  },
  props: {
    Emotion: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    }
  },
  methods: {
    deleteEmotion (Emotion) {
      const emotionIndex = this.emotions.indexOf(Emotion)
      this.emotions.splice(emotionIndex, 1)
    }
  }
}
</script>
<style>
</style>
