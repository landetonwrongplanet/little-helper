<template>
  <div class="ui basic content center aligned segment">
    <button v-show="!isCreating" class="ui basic button icon" @click="openForm">
      <i class="plus icon" />
    </button>
    <div v-show="isCreating" class="ui fluid card">
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>Betreff</label>
            <input ref="title" v-model="titleText" type="text" defaultValue="">
          </div>
          <div class="field">
            <label>Eintrag</label>
            <input ref="project" v-model="entryText" type="text" defaultValue="">
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
      titleText: '',
      entryText: '',
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
      if (this.titleText.length > 0 && this.entryText.length > 0) {
        const title = this.titleText
        const entry = this.entryText
        this.$emit('create-note', {
          title,
          entry,
          date: Date.now()
        })
        this.entryText = ''
      }
      this.isCreating = false
    }
  }
}
</script>
