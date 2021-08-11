<template>
    <button :data-color="color || 'default'">{{ label }}</button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        label: String,
        color: String,
    },
});
</script>

<style lang="scss" scoped>
@import 'assets/variables';

button {
    width: 290px;
    height: 60px;
    background-color: transparent;
    cursor: pointer;
    border-style: solid;
    border-width: 2px;
    border-radius: 10px;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: 500;
    transition: transform 0.15s, border-color 0.15s, border-radius 0.15s;

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

    &:hover,
    &:focus {
        transform: scale(1.1);
        border-color: transparent;
        outline: 0;
    }

    &:active {
        outline: 0;
        border-bottom-color: inherit;
        border-width: 2px;
        border-radius: 0;
    }

    @media (max-width: $w-xl) {
        width: 250px;
    }

    @media (max-width: $w-lg) {
        width: 290px;
        height: 55px;
        font-size: 20px;
    }
}
</style>
