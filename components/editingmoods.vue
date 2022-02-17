<template>
  <div>
    <div class="ui centered card">
      <div v-show="!isEditing" class="content">
        <div class="header">
          <div class="meta">
            <div>
              <p class="label">
                Ausgewählte Stimmung als Emoji:
              </p>
            </div>
            <img class="emojis" :src="require('@/static/'+ mood.moods)">
          </div>
          <div class="meta">
            <div>
              <p class="label">
                Ausgewählte Stimmung als Wort:
              </p>
            </div>{{ mood.words }}
          </div>
          <div class="meta">
            <div>
              <p class="label">
                Ausgewählte Stimmung mittels Skala:
              </p>
            </div>
            {{ mood.scale }}
          </div>
          <div>
            {{ mood.date | dateformat }}
          </div>
          <div class="extra content">
            <span class="right floated edit icon">
              <i class="edit icon" @click="showForm(mood)" />
            </span>
            <span class="right floated trash icon">
              <i class="trash icon" @click="deleteMood(mood)" />
            </span>
          </div>
        </div>
      </div>
      <div v-show="isEditing" class="content">
        <div class="ui Form">
          <div class="field">
            <label>Emoji</label>
            <input v-model="updatedMood.moods" type="emoji">
            <div class="moods">
              <div v-for="(moods,key) in this.moods" :key="key" class="emoticons">
                <div :class="{ chosenmoods:moods.emoji == updatedMood.moods, mood:true}">
                  <img class="emojis" :src="require('@/static/'+ moods.emoji)" @click="choosenemoji(moods.emoji)">
                </div>
              </div>
            </div>
          </div>
          <div class="field">
            <label>Word</label>
            <input v-model="updatedMood.words" type="text">
            <div class="moods">
              <div v-for="(words,key) in this.words" :key="key" class="words">
                <div :class=" { chosenwords:words.word == updatedMood.words}">
                  <p @click="choosenword(words.word)" v-html="words.word" />
                </div>
              </div>
            </div>
          </div>
          <div class="field">
            <label>Scale</label>
            <div class="barometer">
              <input
                v-model="updatedMood.scale"
                type="range"
                min="0"
                max="10"
                step="1.0"
              >
            </div>
          </div>
          <div class="ui two button attached buttons">
            <button class="ui basic blue button" @click="hideForm(mood)">
              Close X
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type = "text/javascript" >

export default {
  filters: {
    dateformat (timestamp) {
      const newDate = new Date()
      newDate.setTime(timestamp)
      return newDate.toLocaleString('de-CH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })
    }
  },
  props: {
    mood: {
      type: Object,
      required: true,
      default: () => {
        return {
        }
      }
    }
  },
  data () {
    return {
      isEditing: false,
      updatedMood: {
        moods: '',
        words: '',
        scale: ''
      },
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
    showForm (mood) {
      console.log(mood)
      this.isEditing = true
      this.updatedMood.moods = mood.moods
      this.updatedMood.words = mood.words
      this.updatedMood.scale = mood.scale
    },
    choosenemoji (id) {
      this.updatedMood.moods = id
      console.log(id)
    },
    choosenword (id) {
      this.updatedMood.words = id
      console.log(id)
    },
    hideForm (mood) {
      this.isEditing = false
      this.$store.commit('mood/updateMood', { old: mood, new: this.updatedMood })
    },
    deleteMood (deletedMood) {
      this.$store.commit('mood/deleteMood', deletedMood)
    },
    openForm () {
      this.isCreating = true
    },
    closeForm () {
      this.isCreating = false
    }
  }
}
</script>
<style>
</style>
