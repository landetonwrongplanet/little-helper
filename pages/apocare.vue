<template>
  <div>
    <div class="wrapper">
      <div class="title">
        <h1>Dies ist deine kleine Hausapotheke</h1>
      </div>
      <div class="title">
        <NuxtLink to="/moodboard">
          Mood validation
        </NuxtLink><br>
        <NuxtLink to="/diaryboard">
        Diary
        </NuxtLink>
         <NuxtLink to="/notes">
          Notes
        </NuxtLink>
      </div>
    </div>
    <div>
      <storeDoc :medicalMemo="medicalMemo" />
      <createMedicalMemo @create-medicalmemo="addMedicalMemo" />
    </div>
  </div>
</template>

<script>
import storeDoc from '~/components/listapodoc.vue'
import createMedicalMemo from '~/components/createapodoc.vue'
export default {
  name: 'App',
  components: {
    storeDoc,
    createMedicalMemo
  },
  data () {
    return {
    }
  },
  computed: {
    medicalMemo () {
      return this.$store.state.apodoc.mobiledoc
    }
  },
  methods: {
    addMedicalMemo (addedMedicalMemo) {
      this.$store.commit('apocare/addMedicalMemo', addedMedicalMemo)
    }
  }
}
</script>
