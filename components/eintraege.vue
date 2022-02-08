<template>
  <div>
    <div>
      <eintrag
        v-for="(entry,key) in entries"
        :key="key"
        :entry="entry"
        @delete-entry="deleteEntry"
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
    entries: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    }
  },
  methods: {
    deleteEntry (entry) {
      const entryIndex = this.entries.indexOf(entry)
      this.entries.splice(entryIndex, 1)
    }
  }
}

</script>
<style>
</style>
