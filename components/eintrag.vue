<template>
  <div>
    <div class="ui centered card">
      <div v-show="!isEditing" class="content">
        <div class="header">
          {{ todo.title }}
        </div>
        <div class="meta">
          {{ todo.project }}
        </div>
        <div>
          {{ todo.date | dateformat }}
        </div>
        <div class="extra content">
          <span class="right floated edit icon">
            <i class="edit icon" @click="showForm" />
          </span>
          <span class="right floated trash icon">
            <i class="trash icon" @click="deleteTodo(todo)" />
          </span>
        </div>
      </div>
      <div v-show="isEditing" class="content">
        <div class="ui Form">
          <div class="field">
            <label>Title</label>
            <input v-model="todo.title" type="text">
          </div>
          <div class="field">
            <label>Project</label>
            <input v-model="todo.project" type="text">
          </div>
          <div class="ui two button attached buttons">
            <button class="ui basic blue button" @click="hideForm">
              Close X
            </button>
          </div>
        </div>
      </div>
      <div v-show="!isEditing &&todo.done" class="ui bottom attached green basic button" disabled @click="pendingTodo(todo)">
        Completed
      </div>
      <div v-show="!isEditing && !todo.done" class="ui bottom attached red basic button" @click="completeTodo(todo)">
        Pending
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
    todo: {
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
      titleText: '',
      projectText: '',
      isCreating: false
    }
  },
  methods: {
    showForm () {
      this.isEditing = true
    },
    hideForm () {
      this.isEditing = false
    },
    deleteTodo (deletedTodo) {
      this.$store.commit('diary/deleteTodo', deletedTodo)
    },
    openForm () {
      this.isCreating = true
    },
    closeForm () {
      this.isCreating = false
    },
    completeTodo (todo) {
      this.$emit('complete-todo', todo)
    },
    pendingTodo (todo) {
      this.$emit('pending-todo', todo)
    }
  }
}
</script>
<style>
</style>
