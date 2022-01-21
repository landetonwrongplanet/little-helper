<template>
  <div>
    <div>
      <eintrag
        v-for="(mood,key) in moods"
        :key="key"
        :mood="mood"
      />
    </div>
  </div>
</template>

<script type = "text/javascript" >
import Eintrag from './eintrag.vue'

export default {
  components: {
    Eintrag
  },
  props: {
    moods: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    }
  },
  computed: {
    completedTasks () {
      return this.moods.filter((mood) => { return mood.done === true }).length
    }
  },
  methods: {
    deleteTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)
    },
    completeTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos[todoIndex].done = true
    },
    pendingTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos[todoIndex].done = false
    }
  }
}

</script>
<style>
</style>
