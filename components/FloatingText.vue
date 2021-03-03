<template>
  <div class="floating-text">
    <p>
      <slot></slot>
      <slot></slot>
      <slot></slot>
      <slot></slot>
    </p>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped lang="scss">
@keyframes float-text {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-20%);
  }
}

div.floating-text {
  width: 100%;
  overflow-x: hidden;
  overflow-y: fragments;

  > p {
    width: 200%;
    overflow-x: hidden;
    white-space: nowrap;
    margin: 48px 0;

    font-family: Playfair Display, serif;
    color: var(--white);
    font-size: 96px;
    font-style: italic;
    text-align: left;
    -webkit-font-smoothing: none;
    content: '';

    animation: float-text 25s linear infinite alternate;
  }
}
</style>
