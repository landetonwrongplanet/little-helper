<template>
  <div class="base-timer">
    <svg
      class="base-timer__svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="base-timer__circle">
        <circle
          class="base-timer__path-elapsed"
          cx="50"
          cy="50"
          r="46.5"
        />
        <path
          class="base-timer__path-remaining"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        />
        <path
          :stroke-dasharray="circleDasharray"
          class="base-timer__path-remaining"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        />
      </g>
    </svg>
    <span class="base-timer__label">
      {{ formattedTimeLeft }}
    </span>
  </div>
</template>

<script>

export default {
  props: {
    alertThreshold: {
      type: Number,
      default: 5
    },
    warningThreshold: {
      type: Number,
      default: 10
    },
    timeLeft: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      name: 'Domenik'
    }
  },
  computed: {
    formattedTimeLeft () {
      const timeLeft = this.timeLeft
      const minutes = Math.floor(timeLeft / 60)
      let seconds = timeLeft % 60
      if (seconds < 10) {
        seconds = `0${seconds}`
      }

      // The output in MM:SS format
      return `${minutes}:${seconds}`
    },
    timeFraction () {
      const rawTimeFraction = this.timeLeft / this.timeLimit

      return rawTimeFraction -
        (1 / this.timeLimit) * (1 - rawTimeFraction)
    },
    circleDasharray () {
      return `${(this.timeFraction * this.formattedTimeLeft).toFixed(0)} 283`
    }
  },
  methods: {
  }
}
</script>
<style scoped lang="css">

.base-timer {
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 300px;
}
  .base-timer__circle {
    fill: none;
    stroke: none;
  }

  .base-timer__path-elapsed {
    stroke-width: 7px;
    stroke:grey;
  }
  .base-timer__label {
    position: absolute;
    width: 300px;
    height: 300px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 48px;
  }
  .base-timer__path-remaining {
    /* Just as thick as the original ring */
    stroke-width: 7px;

    /* Rounds the line endings to create a seamless circle */
    stroke-linecap: round;

    /* Makes sure the animation starts at the top of the circle */
    transform: rotate(90deg);
    transform-origin: center;

    /* One second aligns with the speed of the countdown timer */
    transition: 1s linear all;

    /* Allows the ring to change color when the color value updates */
    stroke: rgb(65, 184, 131);

  }

  .base-timer__svg {
    transform: scaleX(-1);
  }
</style>
