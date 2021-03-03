<template>
  <div>
    <Title
      icon="IconExample"
      label="Example"
      color="default"
      subtitle="true"
      id="example"
    ></Title>

    <Plate color="default" class="plate-link">
      <Typography class="team-sign">
        Example Cinematic Camera resource<br />
        <span class="code">
          <a href="https://github.com/mtasa-typescript/resource-example">
            github.com/mtasa-typescript/resource-example
          </a>
        </span>
      </Typography>
    </Plate>

    <div class="image-container">
      <img
        src="~/assets/ExampleTS.png"
        alt="Function Example TypeScript"
        class="image"
      />
      <img
        src="~/assets/ExampleLua.png"
        alt="Function Example Lua"
        class="image"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    selection: String,
  },
})
</script>

<style scoped lang="scss">
.plate-link {
  .team-sign {
    padding: 64px 0;
    text-align: center;
  }
}

.image-container {
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    transition: 0.15s transform;

    &.hidden {
      transform: scale(0);
    }

    &.image {
      display: block;
      width: 512px;

      &:first-of-type {
        margin-right: 128px;
      }
    }
  }
}
</style>
