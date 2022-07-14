<template>
  <div>
    <div class="wrapper">
      <div class="title">
        <h1>Dies ist dein Sozialkompetenzen-Glossar, wähle eine Kategorie:</h1>
      </div>
      <div class="title">
        <NuxtLink to="/apocare">
          Medical Intervention
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
        <NuxtLink to="/focustimer">
          Your focustimer
        </NuxtLink>
      </div>
    </div>
    <div>
      <situations :social-topic="category[0].situations" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import situations from '~/components/listsocialcategory.vue'
export default {
  name: 'App',
  components: {
    situations
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('socialcompetences', ['getCategoryById']),
    socialTopic () {
      return this.$store.state.socialcompetences.situations
    },
    category () {
      return this.getCategoryById(this.$route.query.category)
    }
  },
  methods: {
    addSocialTopic (addedSocialTopic) {
      this.$store.commit('socialcompetences/addSocialTopic', addedSocialTopic)
    }
  }
}
</script>
