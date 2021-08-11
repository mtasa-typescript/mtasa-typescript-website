<template>
    <div class="container">
        <PartWelcome></PartWelcome>
        <PartGetStarted></PartGetStarted>
        <PartExample></PartExample>
        <PartDocumentation></PartDocumentation>
        <div class="footer"></div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    head: {
        title: 'TypeScript Resources for MTA:SA',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content:
                    'MTA:SA Resources now can be fully written on TypeScript. ' +
                    'This technique allows developer to view documentation in IDE, lint types, ' +
                    'format code and more...',
            },
        ],
    },
});
</script>

<style scoped lang="scss">
.footer {
    height: 256px;
}
</style>
