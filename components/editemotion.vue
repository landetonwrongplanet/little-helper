<template>
  <div>
    <div class="ui centered card">
      <div v-show="!isEditing" class="content">
        <div class="header">
          {{ Emotion.image }}
        </div>
        <div class="meta">
          {{ Emotion.declaration }}
        </div>
        <div>
          {{ Emotion.date | dateformat }}
        </div>
        <div class="extra content">
          <span class="right floated edit icon">
            <i class="edit icon" @click="showForm(Emotion)" />
          </span>
          <span class="right floated trash icon">
            <i class="trash icon" @click="deleteSocialTopic(Emotion)" />
          </span>
        </div>
      </div>
      <div v-show="isEditing" class="content">
        <div class="ui Form">
          <div class="field">
            <label>Headline</label>
            <input v-model="updatedEmotion.image" type="text">
          </div>
          <div class="field">
            <label>Memo</label>
            <input v-model="updatedEmotion.declaration" type="text">
          </div>
          <div class="ui two button attached buttons">
            <button class="ui basic blue button" @click="hideForm(Emotion)">
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
    Emotion: {
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
      image: '',
      declaration: '',
      isCreating: false,
      updatedEmotion: {
        image: '',
        declaration: ''
      }
    }
  },
  methods: {
    showForm (Emotion) {
      this.isEditing = true
      this.updatedEmotion.image = Emotion.image
      this.updatedEmotion.declaration = Emotion.declaration
    },
    hideForm (Emotion) {
      this.isEditing = false
      this.$store.commit('emotionsstore/updateEmotion', { old: Emotion, new: this.updatedEmotion })
    },
    deleteEmotion (deletedEmotion) {
      this.$store.commit('emotionsstore/deleteEmotion', deletedEmotion)
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
