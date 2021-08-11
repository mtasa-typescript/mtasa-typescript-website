<template>
    <div>
        <Nuxt />
    </div>
</template>

<style>
:root {
    --white: #fff;
    --blue: #297fca;
    --purple: #2841c9;
    --orange: #c97328;
    --dark-gray: #383f45;
    --gray: #777e84;
}

body,
html {
    margin: 0;
    padding: 0;
}

* {
    box-sizing: border-box;
}

*::-webkit-scrollbar {
    width: 6px;
    background: var(--white);
}

*::-webkit-scrollbar-thumb {
    background: var(--blue);
}

a {
    color: inherit;
    text-decoration: none;
}
</style>
