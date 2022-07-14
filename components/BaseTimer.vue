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
    timeLeft: {
      type: Number,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">

.base-timer {
  position: relative;
  width: 300px;
  height: 300px;

  &__circle {
    fill: none;
    stroke: none;
  }

  &__path-elapsed {
    stroke-width: 7px;
    stroke:grey;
  }
  &__label {
    position: absolute;

    width: 300px;
    height: 300px;

    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 48px;
  }
}
</style>
