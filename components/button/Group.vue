<template>
  <div>
    <a href="https://github.com/mtasa-typescript/resource-boilerplate">
      <ButtonItem
        class="button"
        label="Get Started"
        color="purple"
      ></ButtonItem>
    </a>
    <a href="https://github.com/mtasa-typescript/resource-example">
      <ButtonItem class="button" label="Example"></ButtonItem>
    </a>
    <a href="https://github.com/mtasa-typescript/resource-boilerplate">
      <ButtonItem
        class="button"
        label="Documentation"
        color="orange"
      ></ButtonItem>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped lang="scss">
div {
  display: flex;
  justify-content: center;

  > a:not(:last-of-type) {
    margin-right: 48px;
  }
}
</style>
