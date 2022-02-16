<template>
  <div class="ui basic content center aligned segment">
    <button v-show="!isCreating" class="ui basic button icon" @click="openForm">
      <i class="plus icon" />
    </button>
    <div v-show="isCreating" class="ui fluid card">
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>Headline</label>
            <input ref="title" v-model="kardexTitle" type="text" defaultValue="">
          </div>
          <div class="field">
            <label>Memo</label>
            <input ref="project" v-model="kardexText" type="text" defaultValue="">
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
      kardexTitle: '',
      kardexText: '',
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
      if (this.kardexTitle.length > 0 && this.kardexText.length > 0) {
        const kardextitle = this.kardexTitle
        const kardextext = this.kardexText
        this.$emit('create-medicalmemo', {
          kardextitle,
          kardextext,
          date: Date.now()
        })
        this.kardexText = ''
      }
      this.isCreating = false
    }
  }
}
</script>
