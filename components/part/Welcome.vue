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
      inlineStyle="height: 280px; margin-bottom: -1px;"
    >
      <FloatingText>
        Documentation &
        <b>Linting</b> & Formatting & <b>IDE Setup</b> &
      </FloatingText>
    </Plate>
    <Plate color="gray" class="plate-team" inlineStyle="height: 280px">
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
.plate-with-bold {
  b {
    font-weight: 600;
  }

  .welcome,
  .welcome-center {
    margin-left: auto;
    margin-right: auto;
    max-width: 1360px;
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
}

.plate-team {
  margin-top: -64px !important;

  .team-sign {
    padding: 32px 0;
    margin-top: 48px;
    text-align: center;
  }
}

.plate-floating {
  margin-bottom: 0 !important;
}
</style>
