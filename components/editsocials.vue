<template>
  <div>
    <div class="ui centered card">
      <div v-show="!isEditing" class="content">
        <div class="header">
          {{ socialTopic.topictitle }}
        </div>
        <div class="meta">
          {{ socialTopic.topictext }}
        </div>
        <div>
          {{ socialTopic.date | dateformat }}
        </div>
        <div class="extra content">
          <span class="right floated edit icon">
            <i class="edit icon" @click="showForm(socialTopic)" />
          </span>
          <span class="right floated trash icon">
            <i class="trash icon" @click="deleteSocialTopic(socialTopic)" />
          </span>
        </div>
      </div>
      <div v-show="isEditing" class="content">
        <div class="ui Form">
          <div class="field">
            <label>Headline</label>
            <input v-model="updatedSocialTopic.topictitle" type="text">
          </div>
          <div class="field">
            <label>Memo</label>
            <input v-model="updatedSocialTopic.topictext" type="text">
          </div>
          <div class="ui two button attached buttons">
            <button class="ui basic blue button" @click="hideForm(socialTopic)">
              Close X
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type = "text/javascript" >

export default {
  filters: {
    dateformat (timestamp) {
      const newDate = new Date()
      newDate.setTime(timestamp)
      return newDate.toLocaleString('de-CH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })
    }
  },
  props: {
    socialTopic: {
      type: Object,
      required: true,
      default: () => {
        return {
        }
      }
    }
  },
  data () {
    return {
      isEditing: false,
      topicTitle: '',
      topicText: '',
      isCreating: false,
      updatedSocialTopic: {
        topictitle: '',
        topictext: ''
      }
    }
  },
  methods: {
    showForm (socialTopic) {
      this.isEditing = true
      this.updatedSocialTopic.topictitle = socialTopic.topictitle
      this.updatedSocialTopic.topictext = socialTopic.topictext
    },
    hideForm (socialTopic) {
      this.isEditing = false
      this.$store.commit('socialcompetences/updateSocialTopic', { old: socialTopic, new: this.updatedSocialTopic })
    },
    deleteSocialTopic (deletedSocialTopic) {
      this.$store.commit('socialcompetences/deleteSocialTopic', deletedSocialTopic)
    },
    openForm () {
      this.isCreating = true
    },
    closeForm () {
      this.isCreating = false
    }
  }
}
</script>
<style>
</style>
