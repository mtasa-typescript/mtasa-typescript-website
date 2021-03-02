<template>
  <component :is="tag || 'h1'" class="title" :data-color="color || 'default'">
    <span class="icon"><component :is="icon"></component></span>
    <span class="label">{{ label }}</span>
  </component>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    label: String,
    color: String,
    icon: String,
    tag: String,
  },
})
</script>

<style scoped lang="scss">
.title {
  font-family: Poppins, sans-serif;
  font-weight: 700;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 96px;
  margin: 16px 0;

  &[data-color='default'] {
    color: var(--blue);
    border-color: var(--blue);
  }

  &[data-color='purple'] {
    color: var(--purple);
    border-color: var(--purple);
  }

  &[data-color='orange'] {
    color: var(--orange);
    border-color: var(--orange);
  }

  > .label {
    display: inline-block;
    width: 100%;

  }

  > .icon {
    width: 120px;
    height: 120px;
    margin-left: 16px;
    margin-right: 16px;
    position: absolute;
  }
}
</style>
