<template>
    <component
        :is="tag || 'h1'"
        class="title"
        :data-color="color || 'default'"
        :data-subtitle="subtitle || 'false'"
    >
        <a class="icon" v-scroll-to="'#title'">
            <component :is="icon"></component>
        </a>
        <span class="label">{{ label }}</span>
    </component>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    props: {
        label: String,
        color: String,
        icon: String,
        tag: String,
        subtitle: String,
    },
});
</script>

<style scoped lang="scss">
@import 'assets/variables';

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

        @media (max-width: $w-lg) {
            margin-bottom: 24px;
        }
        @media (max-width: $w-md) {
            margin-bottom: 18px;
        }
        @media (max-width: $w-sm) {
            margin-bottom: 16px;
        }
    }

    > .icon {
        margin-top: 52px;
        margin-left: 32px;
        margin-right: 16px;
        position: absolute;
        cursor: pointer;

        > svg {
            width: 120px;
            height: 120px;

            @media (max-width: $w-xl) {
                width: 100px;
                height: 100px;
            }

            @media (max-width: $w-sm) {
                width: 48px;
                height: 48px;
            }
            @media (max-width: $w-xs) {
                width: 32px;
                height: 32px;
            }
        }

        @media (max-width: $w-xx) {
            margin-top: 44px;
        }
        @media (max-width: $w-xl) {
            margin-top: 36px;
        }

        @media (max-width: $w-lg) {
            margin-top: 0;
            position: static;
        }

        @media (max-width: $w-xs) {
            margin-left: 10px;
            margin-right: 10px;
        }
    }

    &[data-subtitle='true'] {
        margin-top: 128px;
    }

    @media (max-width: $w-xx) {
        font-size: 64px;
        margin-top: 32px;
    }

    @media (max-width: $w-xl) {
        font-size: 58px;
        margin-top: 32px;
    }

    @media (max-width: $w-lg) {
    }

    @media (max-width: $w-md) {
        padding-right: 8px;
        font-size: 40px;
    }

    @media (max-width: $w-sm) {
        font-size: 32px;
    }
}
</style>
