<template>
  <div>
    <div class="ui centered card">
      <div v-show="!isEditing" class="content">
        <div class="header">
          {{ times.topictitle }}
        </div>
        <div class="meta">
          {{ times.topictext }}
        </div>
        <div>
          {{ times.date | dateformat }}
        </div>
        <div class="extra content">
          <span class="right floated edit icon">
            <i class="edit icon" @click="showForm(times)" />
          </span>
          <span class="right floated trash icon">
            <i class="trash icon" @click="deleteTime(times)" />
          </span>
        </div>
      </div>
      <div v-show="isEditing" class="content">
        <div class="ui Form">
          <div class="field">
            <label>Task</label>
            <input v-model="updatedTime.topictitle" type="text">
          </div>
          <div class="field">
            <label>Time</label>
            <input v-model="updatedTime.topictext" type="text">
          </div>
          <div class="ui two button attached buttons">
            <button class="ui basic blue button" @click="hideForm(times)">
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
    times: {
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
      updatedTime: {
        topictitle: '',
        topictext: ''
      }
    }
  },
  methods: {
    showForm (Timer) {
      this.isEditing = true
      this.updatedTime.topictitle = Timer.topictitle
      this.updatedTime.topictext = Timer.topictext
    },
    hideForm (Timer) {
      this.isEditing = false
      this.$store.commit('timerstore/updateTime', { old: Timer, new: this.updatedTime })
    },
    deleteTime (deletedTime) {
      this.$store.commit('timerstore/deleteTime', deletedTime)
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
