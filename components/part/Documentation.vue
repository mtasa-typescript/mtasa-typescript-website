<template>
  <div>
    <Title
      icon="IconDocumentation"
      label="Documentation"
      color="orange"
      subtitle="true"
      id="documentation"
    ></Title>

    <Plate color="orange" class="plate-link">
      <Typography class="documentation">
        Revealing documentation for declared entities in your IDE described in
        Get Started tutorial. <br />
        All declared function definitions, classes, properties and methods are
        taken from <b>MTA:SA Wiki</b>
      </Typography>
    </Plate>

    <div class="image-container">
      <a :href="require('~/assets/Documentation.png')">
        <img
          src="~/assets/Documentation.png"
          alt="Function Example Lua"
          class="image"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped lang="scss">
@import 'assets/variables';

.plate-link {
  .documentation {
    margin-left: auto;
    margin-right: auto;
    max-width: $block-width;
  }
}

.image-container {
  width: 100%;

  img.image {
    display: block;
    margin: 0 auto;

    @include fluid-image($w-lg, 32px);
    @include fluid-image($w-sm, 8px);
  }
}
</style>
