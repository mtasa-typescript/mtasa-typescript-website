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
@import 'assets/variables';

div {
  display: flex;
  justify-content: center;
  align-items: center;

  > a:not(:last-of-type) {
    margin-right: 48px;

    @media (max-width: $w-xl) {
      margin-right: 24px;
    }

    @media (max-width: $w-lg) {
      margin-right: 0;
      margin-bottom: 24px;
    }

    @media (max-width: $w-sm) {
      margin-bottom: 48px;
    }
  }

  @media (max-width: $w-lg) {
    flex-direction: column;
  }
}
</style>
