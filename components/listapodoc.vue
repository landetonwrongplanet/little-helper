<template>
  <div>
    <div>
      <mobiledoc
        v-for="(medicalMemo,key) in medicalMemo"
        :key="key"
        :medical-memo="medicalMemo"
        @delete-medicalmemo="deleteMedicalMemo"
      />
    </div>
  </div>
</template>

<script type = "text/javascript" >
import Mobiledoc from './editingapodoc.vue'

export default {
  components: {
    Mobiledoc
  },
  props: {
    medicalMemo: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    }
  },
  methods: {
    deleteMedicalMemo (medicalMemo) {
      const medicalIndex = this.mobiledoc.indexOf(medicalMemo)
      this.mobiledoc.splice(medicalIndex, 1)
    }
  }
}
</script>
<style>
</style>
