<template>
  <div>
    <div>
      <socials
        v-for="(socialTopic,key) in socialTopic"
        :key="key"
        :social-topic="socialTopic"
        @delete-socialtopic="deleteSocialTopic"
      />
    </div>
  </div>
</template>

<script type = "text/javascript" >
import Socials from './editsocialcategory.vue'

export default {
  components: {
    Socials
  },
  props: {
    socialTopic: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    }
  },
  methods: {
    deleteSocialTopic (socialTopic) {
      const socialIndex = this.socials.indexOf(socialTopic)
      this.socials.splice(socialIndex, 1)
    }
  }
}
</script>
<style>
</style>
