<template>
  <div>
    <div class="wrapper">
      <div class="title">
        <h1>Dies ist deine kleine Hausapotheke</h1>
      </div>
      <div class="title">
        <NuxtLink to="/diaryboard">
          Diary
        </NuxtLink><br>
        <NuxtLink to="/notes">
          Notes
        </NuxtLink><br>
        <NuxtLink to="/socially">
          Social competences
        </NuxtLink><br>
        <NuxtLink to="/learnemotions">
          Learn emotions
        </NuxtLink><br>
        <NuxtLink to="/focustimer">
          Your focustimer
        </NuxtLink>
      </div>
    </div>
    <div>
      <storeDoc :medical-memo="medicalMemo" />
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
      this.$store.commit('apodoc/addMedicalMemo', addedMedicalMemo)
    }
  }
}
</script>
