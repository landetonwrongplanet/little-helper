<template>
  <div>
    <div>
      <eintrag
        v-for="(todo,key) in todos"
        :key="key"
        :todo="todo"
        @delete-todo="deleteTodo"
        @complete-todo="completeTodo"
        @pending-todo="pendingTodo"
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
    todos: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    }
  },
  computed: {
    completedTasks () {
      return this.todos.filter((todo) => { return todo.done === true }).length
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
