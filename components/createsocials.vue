<template>
  <div class="ui basic content center aligned segment">
    <button v-show="!isCreating" class="ui basic button icon" @click="openForm">
      <i class="plus icon" />
    </button>
    <div v-show="isCreating" class="ui fluid card">
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>Kategorie</label>
            <input ref="title" v-model="topicTitle" type="text" defaultValue="">
          </div>
          <div class="field">
            <label>Memo</label>
            <input ref="project" v-model="topicText" type="text" defaultValue="">
          </div>
          <div class="ui two button attached buttons">
            <button class="ui basic blue button" @click="sendForm()">
              Create
            </button>
            <button class="ui basic red button" @click="closeForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      topicTitle: '',
      topicText: '',
      isCreating: false
    }
  },
  methods: {
    openForm () {
      this.isCreating = true
    },
    closeForm () {
      this.isCreating = false
    },
    sendForm () {
      if (this.topicTitle.length > 0 && this.topicText.length > 0) {
        const topictitle = this.topicTitle
        const topictext = this.topicText
        this.$emit('create-socialtopic', {
          topictitle,
          topictext,
          date: Date.now()
        })
        this.topicText = ''
      }
      this.isCreating = false
    }
  }
}
</script>
