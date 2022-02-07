<template>
  <div>
    <div class="ui centered card">
      <div v-show="!isEditing" class="content">
        <div class="header">
          <div class="meta">
            <div><p class="label">Ausgewählte Stimmung als Emoji:</p></div>
            <img class="emojis" :src="require('@/static/'+ mood.moods)">
          </div>
        <div class="meta">
        <div><p class="label">Ausgewählte Stimmung als Wort:</p></div>{{ mood.words }}
        </div>
        <div class="meta">
          <div><p class="label">Ausgewählte Stimmung mittels Skala:</p></div>
          {{ mood.scale }}
        </div>
        <div>
          {{ mood.date | dateformat }}
        </div>
        <div class="extra content">
          <span class="right floated edit icon">
            <i class="edit icon" @click="showForm" />
          </span>
          <span class="right floated trash icon">
            <i class="trash icon" @click="deleteMood(mood)" />
          </span>
        </div>
      </div>
      <div v-show="isEditing" class="content">
        <div class="ui Form">
          <div class="field">
            <label>Emoji</label>
            <input v-model="mood.chosenmood" type="emoji">
          </div>
          <div class="field">
            <label>Word</label>
            <input v-model="mood.chosenword" type="text">
          </div>
          <div class="ui two button attached buttons">
            <button class="ui basic blue button" @click="hideForm">
              Close X
            </button>
          </div>
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
    mood: {
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
    }
  },
  methods: {
    showForm () {
      this.isEditing = true
    },
    hideForm () {
      this.isEditing = false
    },
    deleteMood (mood) {
      this.$emit('delete-mood', mood)
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
