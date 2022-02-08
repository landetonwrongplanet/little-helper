<template>
  <div class="ui basic content center aligned segment">
    <button v-show="!isCreating" class="ui basic button icon" @click="openForm">
      <i class="plus icon" />
    </button>
    <div v-show="isCreating" class="ui fluid card">
      <div class="content">
        <div class="ui form">
          <div class="title">
            <h2>
              In Emoticons
            </h2>
          </div>
          <div class="moods">
            <div v-for="(moods,key) in this.moods" :key="key" class="emoticons">
              <div :class="{ chosenmoods:moods.emoji == chosenmood, mood:true}">
                <img class="emojis" :src="require('@/static/'+ moods.emoji)" @click="choosenemoji(moods.emoji)">
              </div>
            </div>
          </div>
          <div claass="title">
            <h2>
              In Worten
            </h2>
          </div>
          <div class="moods">
            <div v-for="(words,key) in this.words" :key="key" class="words">
              <div :class=" { chosenwords:words.word == chosenword}">
                <p @click="choosenword(words.word)" v-html="words.word" />
              </div>
            </div>
          </div>
          <div>
            <div class="title">
              <h2>
                Mittels Skala
              </h2>
            </div>
            <div class="scale">
              {{ scale }}
            </div>
            <div class="barometer">
              <input
                v-model="scale"
                type="range"
                min="0"
                max="10"
                step="1.0"
              >
            </div>
          </div>
          <div class="ui two button attached buttons">
            <button class="ui basic blue button" @click="sendForm()">
              Create
            </button>
            <button class="ui basic red button" @click="closeForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isCreating: false,
      scale: 5,
      chosenmood: null,
      chosenword: null
    }
  },
  computed: {
    moods () {
      return this.$store.state.mood.emojis
    },
    words () {
      return this.$store.state.mood.words
    }
  },
  methods: {
    choosenemoji (id) {
      this.chosenmood = id
      console.log(id)
    },
    choosenword (id) {
      this.chosenword = id
      console.log(id)
    },
    openForm () {
      this.isCreating = true
    },
    closeForm () {
      this.isCreating = false
    },
    sendForm () {
      if (this.words.length > 0 && this.scale && this.moods.length > 0) {
        const moods = this.chosenmood
        const words = this.chosenword
        const scale = this.scale
        this.$emit('create-mood', {
          moods,
          words,
          scale,
          date: Date.now()
        })
        this.newMoodDiary = ''
      }
      this.isCreating = false
    }
  }
}
</script>
