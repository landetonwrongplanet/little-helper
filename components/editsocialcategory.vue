<template>
  <div>
    <div class="ui centered card">
      <div v-show="!isEditing" class="content">
        <div class="header">
          {{ socialTopic.id }}
        </div>
        <div class="meta">
          {{ socialTopic.title }}
        </div>
           </div>
        <div class="meta">
          {{ socialTopic.text }}
        </div>
        <NuxtLink :to="{path:'socially_undercategory', query:{category:socialTopic.id}}">
          Medical Intervention
        </NuxtLink><br>
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
            <label>ID</label>
            <input v-model="updatedSocialTopic.id" type="text">
          </div>
          <div class="field">
            <label>Bezeichnung</label>
            <input v-model="updatedSocialTopic.title" type="text">
          </div>
          <div class="field">
            <label>Bezeichnung</label>
            <input v-model="updatedSocialTopic.text" type="text">
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
      id: '',
      title: '',
      text: '',
      isCreating: false,
      updatedSocialTopic: {
        id: '',
        title: '',
        text: ''
      }
    }
  },
  methods: {
    showForm (socialTopic) {
      this.isEditing = true
      this.updatedSocialTopic.id = socialTopic.id
      this.updatedSocialTopic.title = socialTopic.title
      this.updatedSocialTopic.text = socialTopic.text
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
