<template>
    <p class="typography">
        <slot></slot>
    </p>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped lang="scss">
@import 'assets/variables';

p.typography {
    margin: 8px 0;
    padding: 0 8px;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    color: var(--white);
    font-size: 24px;

    &.code,
    .code {
        font-family: Fira Code, monospace;
    }

    @media (max-width: $w-lg) {
        padding-left: 8px;
        padding-right: 8px;
    }

    @media (max-width: $w-md) {
        font-size: 18px;
    }
    @media (max-width: $w-sm) {
        font-size: 16px;
        text-align: center;
    }
}
</style>
