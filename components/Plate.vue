<template>
  <div class="plate-container">
    <div
      class="plate"
      :data-color="color || 'default'"
      :style="inlineStyle || ''"
    >
      <div class="plate-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    color: String,
    inlineStyle: String,
  },
})
</script>

<style scoped lang="scss">
@import 'assets/variables';

.plate-container {
  width: 100%;
  overflow-x: hidden;
  margin: 32px 0;
  padding: 32px 0;
  transform: skewY(-1.075deg);

  > .plate {
    width: 100%;
    padding: 32px 0;
    transition: 0.15s transform;

    > .plate-content {
      transform: skewY(1.075deg);
      transition: 0.25s transform;
    }

    &[data-color='default'] {
      background-color: var(--blue);
    }

    &[data-color='gray'] {
      background-color: var(--gray);
    }

    &[data-color='dark-gray'] {
      background-color: var(--dark-gray);
    }

    &[data-color='orange'] {
      background-color: var(--orange);
    }

    &.hidden {
      transform: translateX(-100%);

      > .plate-container {
        transform: translateX(100%);
      }
    }
  }

  @media (max-width: $w-sm) {
    margin-top: 0;
  }
}
</style>
