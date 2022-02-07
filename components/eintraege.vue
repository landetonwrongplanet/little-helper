<template>
  <div>
    <div>
      <eintrag
        v-for="(todo,key) in todos"
        :key="key"
        :todo="todo"
        @delete-todo="deleteTodo"
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
  methods: {
    deleteTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)
    }
  }
}

</script>
<style>
</style>
