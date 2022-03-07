<template>
  <div class="ui basic content center aligned segment">
    <button v-show="!isCreating" class="ui basic button icon" @click="openForm">
      <i class="plus icon" />
    </button>
    <div v-show="isCreating" class="ui fluid card">
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>Image</label>
            <input ref="title" v-model="image" type="text" defaultValue="">
          </div>
          <div class="field">
            <label>Declaration</label>
            <input ref="project" v-model="declaration" type="text" defaultValue="">
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
      image: '',
      declaration: '',
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
      if (this.image.length > 0 && this.declaration.length > 0) {
        const image = this.image
        const declaration = this.declaration
        this.$emit('create-emotion', {
          image,
          declaration,
          date: Date.now()
        })
        this.declaration = ''
      }
      this.isCreating = false
    }
  }
}
</script>
