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
                    <a
                        href="https://github.com/mtasa-typescript/resource-example"
                    >
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
import Vue from 'vue';

export default Vue.extend({
    props: {
        selection: String,
    },
});
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
    display: flex;
    justify-content: center;
    align-items: center;
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

                @media (max-width: $w-xl) {
                    margin-right: 0;
                    margin-bottom: 64px;
                }
            }

            @include fluid-image($w-sm, 8px);
        }
    }

    @media (max-width: $w-xl) {
        flex-direction: column;
    }
}
</style>
