<template>
  <div class="wrapper">
    <div class="title">
    <h1>
      Dokumentiere Deine Stimmung
    </h1>
    </div>
    <div class="title">
      <NuxtLink to="/">
        Diary
      </NuxtLink>
    </div>
  <div>
    <div>
      <CreateMood @create-todo="addTodo" />
    </div>
  </div>
  </div>
</template>
<script>
import CreateMood from '~/components/createmoodeintrag.vue'
export default {
  components: {
    CreateMood
  },
  methods: {
  }
}
</script>
