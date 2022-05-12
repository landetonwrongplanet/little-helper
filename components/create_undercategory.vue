<template>
  <div class="ui basic content center aligned segment">
    <button v-show="!isCreating" class="ui basic button icon" @click="openForm">
      <i class="plus icon" />
    </button>
    <div v-show="isCreating" class="ui fluid card">
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>ID</label>
            <input ref="title" v-model="id" type="text" defaultValue="">
          </div>
          <div class="field">
            <label>Situation</label>
            <input ref="project" v-model="name" type="text" defaultValue="">
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
      id: '',
      name: '',
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
      if (this.id.length > 0 && this.name.length > 0) {
        const id = this.id
        const name = this.name
        this.$emit('create-socialtopic', {
          id,
          name
        })
        this.name = ''
      }
      this.isCreating = false
    }
  }
}
</script>
