<template>
  <div>
    <p>Work in progress</p>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped lang="scss">
div {
  width: 100%;
  margin: 32px 0;
  height: 360px;
  background-color: var(--blue);
  transform: skewY(-1.075deg);
}

p {
  transform: skewY(1.075deg);

  font-family: Playfair Display, serif;
  color: var(--white);
  font-size: 96px;
  font-style: italic;
  padding-top: 100px;
  text-align: center;
}
</style>
