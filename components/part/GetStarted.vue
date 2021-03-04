<template>
  <div>
    <Title
      id="get-started"
      icon="IconGetStarted"
      label="Get Started"
      color="purple"
      subtitle="true"
    ></Title>

    <Plate color="dark-gray" class="plate-link">
      <Typography class="team-sign">
        Visit the link below to view complete tutorial<br />
        <span class="code">
          <a href="https://github.com/mtasa-typescript/resource-boilerplate">
            github.com/mtasa-typescript/resource-boilerplate
          </a>
        </span>
      </Typography>
    </Plate>

    <div class="image-container">
      <a href="https://github.com/mtasa-typescript/resource-boilerplate">
        <img
          src="~/assets/GetStarted.png"
          alt="Get Started Tutorial"
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
  .team-sign {
    text-align: center;

    @include plate-padding();
  }
}

.image-container {
  width: 100%;

  img.image {
    display: block;
    position: relative;
    z-index: 1;
    margin: -110px auto 0 auto;

    @include fluid-image($w-lg, 32px);
    @include fluid-image($w-sm, 8px);

    @media (max-width: $w-md) {
      margin-top: 0px;
    }
  }
}
</style>
