<template>
  <div>
    <div class="wrapper">
      <div class="title">
        <h1>Dies ist dein Sozialkompetenzen-Glossar</h1>
      </div>
      <div class="title">
        <NuxtLink to="/moodboard">
          Mood validation
        </NuxtLink><br>
        <NuxtLink to="/diaryboard">
          Diary
        </NuxtLink><br>
        <NuxtLink to="/notes">
          Notes
        </NuxtLink><br>
        <NuxtLink to="/learnemotions">
          Learn emotions
        </NuxtLink><br>
      </div>
    </div>
    <div>
      <socialCompetences :social-topic="socialTopic" />
      <createSocialTopic @create-socialtopic="addSocialTopic" />
    </div>
  </div>
</template>

<script>
import socialCompetences from '~/components/listsocials.vue'
import createSocialTopic from '~/components/createsocials.vue'
export default {
  name: 'App',
  components: {
    socialCompetences,
    createSocialTopic
  },
  data () {
    return {
    }
  },
  computed: {
    socialTopic () {
      return this.$store.state.socialcompetences.socials
    }
  },
  methods: {
    addSocialTopic (addedSocialTopic) {
      this.$store.commit('socialcompetences/addSocialTopic', addedSocialTopic)
    }
  }
}
</script>
