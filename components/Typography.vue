<template>
  <p class="typography">
    <slot></slot>
  </p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped lang="scss">
p.typography {
  margin: 8px 0;
  padding: 0 8px;
  text-align: left;
  font-family: 'Poppins', sans-serif;
  color: var(--white);
  font-size: 36px;

  &.code,
  .code {
    font-family: Fira Code, monospace;
  }
}
</style>
