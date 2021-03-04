<template>
  <div>
    <Title
      icon="IconMtasaTypescript"
      label="TypeScript Resources"
      id="title"
    ></Title>

    <Plate color="default" class="plate-with-bold">
      <Typography class="welcome">
        TypeScript language transpiling for creating MTA:SA Resources. <br />
        The goal is to make <b>resource creating simpler</b>. You will not need
        to check function types or object properties and methods manually.
        <b>IDE will help</b> you to provide correct types and select existing
        methods. Also you can view <b>documentation faster</b> without opening
        MTA:SA Wiki in browser.
      </Typography>
      <Typography class="welcome-center">
        You <b>do not need</b> even <b>to start the game</b> to check the
        syntax. <br />
        TypeScript will message you if something is not correct.
      </Typography>
    </Plate>

    <div class="button-container">
      <ButtonGroup></ButtonGroup>
    </div>

    <Plate
      color="dark-gray"
      class="plate-floating"
      inlineStyle="margin-bottom: -1px;"
    >
      <FloatingText>
        Documentation &
        <b>Linting</b> & Formatting & <b>IDE Setup</b> &
      </FloatingText>
    </Plate>
    <Plate color="gray" class="plate-team">
      <Typography class="team-sign">
        MTASA TypeScript Team on GitHub:
        <span class="code">
          <a href="https://github.com/mtasa-typescript">
            github.com/mtasa-typescript
          </a>
        </span>
      </Typography>
    </Plate>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped lang="scss">
@import 'assets/variables';

.plate-with-bold {
  b {
    font-weight: 600;
  }

  .welcome,
  .welcome-center {
    margin-left: auto;
    margin-right: auto;
    max-width: $block-width;
  }

  .welcome {
  }

  .welcome-center {
    margin-top: 32px;
    font-style: italic;
    text-align: center;
  }
}

.button-container {
  margin: 128px 0;

  @media (max-width: $w-sm) {
    margin-top: 64px;
    margin-bottom: 64px;
  }
}

.plate-team {
  margin-top: -64px !important;

  .team-sign {
    margin-top: 16px;
    text-align: center;

    @include plate-padding();
  }
}

.plate-floating {
  margin-bottom: 0 !important;
}
</style>
