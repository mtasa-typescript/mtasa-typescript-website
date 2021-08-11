<template>
    <div class="floating-text">
        <p>
            <slot></slot>
            <slot></slot>
            <slot></slot>
            <slot></slot>
        </p>
    </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped lang="scss">
@import 'assets/variables';

@keyframes float-text {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-20%);
    }
}

div.floating-text {
    width: 100%;
    overflow-x: hidden;

    > p {
        width: 200%;
        overflow-x: hidden;
        white-space: nowrap;
        margin: 48px 0;

        font-family: Playfair Display, serif;
        color: var(--white);
        font-size: 96px;
        font-style: italic;
        text-align: left;
        -webkit-font-smoothing: none;

        animation: float-text 25s linear infinite alternate;

        @media (max-width: $w-md) {
            font-size: 32px;
        }
        @media (max-width: $w-sm) {
            animation-duration: 10s;
        }
    }
}
</style>
