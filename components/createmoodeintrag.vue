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
                <img class="emojis" :src="require('@/static/'+ moods.emoji)" @click="choose(moods.emoji)">
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
              <div :class=" { chosenwords:words.id == chosenword}">
                <p @click="choosen(words.id)" v-html="words.word" />
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
      moods: [{
        id: 1,
        emoji: 'Emoji01.png'
      }, {
        id: 2,
        emoji: 'Emoji02.png'
      }, {
        id: 3,
        emoji: 'Emoji03.png'
      }, {
        id: 4,
        emoji: 'Emoji04.png'
      }, {
        id: 5,
        emoji: 'Emoji05.png'
      }, {
        id: 6,
        emoji: 'Emoji06.png'
      }, {
        id: 7,
        emoji: 'Emoji07.png'
      }, {
        id: 8,
        emoji: 'Emoji08.png'
      }, {
        id: 9,
        emoji: 'Emoji09.png'
      }, {
        id: 10,
        emoji: 'Emoji10.png'
      }, {
        id: 11,
        emoji: 'Emoji11.png'
      }, {
        id: 12,
        emoji: 'Emoji12.png'
      }],
      chosenmood: null,
      words: [{
        id: 1,
        word: 'enttäuscht'
      }, {
        id: 2,
        word: 'traurig'
      }, {
        id: 3,
        word: 'verletzt'
      }, {
        id: 4,
        word: 'gestresst'
      }, {
        id: 5,
        word: 'ängstlich'
      }, {
        id: 6,
        word: 'wütend'
      }, {
        id: 7,
        word: 'fröhlich'
      }, {
        id: 8,
        word: 'neutral'
      }, {
        id: 9,
        word: 'glücklich'
      }, {
        id: 10,
        word: 'zufrieden'
      }, {
        id: 11,
        word: 'erschöpft'
      }, {
        id: 12,
        word: 'verzweifelt'
      }, {
        id: 13,
        word: 'aufgedreht'
      }
      ],
      chosenword: null
    }
  },
  methods: {
    choose (id) {
      this.chosenmood = id
      console.log(id)
    },
    choosen (id) {
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
