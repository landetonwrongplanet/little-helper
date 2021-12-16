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
            <input ref="project" v-model="projectText" type="text" defaultValue="">
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
      projectText: '',
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
      console.log(this.titleText.length, this.projectText.length)
      if (this.titleText.length > 0 && this.projectText.length > 0) {
        const title = this.titleText
        const project = this.projectText
        this.$emit('create-todo', {
          title,
          project,
          date: Date.now()
        })
        this.newTodoText = ''
      }
      this.isCreating = false
    }
  }
}
</script>
