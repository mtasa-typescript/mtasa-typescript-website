<template>
  <div>
    <a v-scroll-to="'#get-started'">
      <ButtonItem
        class="button"
        label="Get Started"
        color="purple"
      ></ButtonItem>
    </a>
    <a v-scroll-to="'#example'">
      <ButtonItem class="button" label="Example"></ButtonItem>
    </a>
    <a v-scroll-to="'#documentation'">
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
