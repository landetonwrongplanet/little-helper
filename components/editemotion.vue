<template>
  <div>
    <div class="ui centered card">
      <div v-show="!isEditing" class="content">
        <div class="header">
          <img class="pictures" :src="require('@/static/'+ emotionEntry.image)">
        </div>
        <div class="meta">
          {{ emotionEntry.declaration }}
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
            <button class="ui basic blue button" @click="hideForm(emotionEntry)">
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
    emotionEntry: {
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
