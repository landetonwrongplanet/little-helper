<template>
  <div>
    <div class="wrapper">
      <div class="title">
        <h1>Hier kannst du das Lesen von Emotionen erlernen</h1>
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
        <NuxtLink to="/focustimer">
          Your focustimer
        </NuxtLink>
      </div>
    </div>
    <div>
      <Emotions :emotion-entries="emotions" />
    </div>
  </div>
</template>

<script>
import Emotions from '~/components/listemotions.vue'
export default {
  name: 'App',
  components: {
    Emotions
  },
  data () {
    return {
    }
  },
  computed: {
    emotions () {
      return this.$store.state.emotionsstore.emotions
    }
  },
  methods: {
    addEmotion (addedEmotion) {
      this.$store.commit('emotionsstore/addEmotion', addedEmotion)
    }
  }
}
</script>
