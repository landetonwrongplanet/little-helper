<template>
  <div>
    <div>
      <Entry
        v-for="(entry,key) in entries"
        :key="key"
        :entry="entry"
        @delete-entry="deleteEntry"
      />
    </div>
  </div>
</template>

<script type = "text/javascript" >
import Entry from './editingentry.vue'

export default {
  components: {
    Entry
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
