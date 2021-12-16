<template>
  <div>
    <div class="wrapper">
      <div class="title">
        <h1>Dies ist dein persönliches Tagebuch📝</h1>
      </div>
      <div class="title">
        <NuxtLink to="/moodboard">
          Mood validation
        </NuxtLink>
      </div>
    </div>
    <div>
      <TodoList :todos="todos" />
      <CreateTodo @create-todo="addTodo" />
    </div>
  </div>
</template>

<script>
import TodoList from '~/components/eintraege'
import CreateTodo from '~/components/createeintrag.vue'
export default {
  name: 'App',
  components: {
    TodoList,
    CreateTodo
  },
  data () {
    return {
    }
  },
  computed: {
    todos () {
      return this.$store.state.diary.todos
    }
  },
  methods: {
    addTodo (addedTodo) {
      this.$store.commit('diary/addTodo', addedTodo)
    }
  }
}

</script>
