<script setup lang="ts">
import type { RouterLink } from '@/router/list-routes';
import { defineProps, withDefaults } from 'vue';

interface Props {
    title?: string;
    links: RouterLink[];
}

withDefaults(defineProps<Props>(), {
    title: 'CompoApp'

})


</script>

<template>
    <nav>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
        <!-- <span v-if="$props.title"> {{ title }}</span> -->
        <span> {{ $props.title }}</span>

        <RouterLink v-for="link of $props.links" :key="link.path" :to="link.path">
            {{ link.title }}
        </RouterLink>

    </nav>
</template>
<style scoped>
nav {
    align-items: flex-start;
    display: flex;
    font-size: 12px;
    margin-top: 10px;
    text-align: center;
    width: 100%;
}

img {
    margin-right: 5px;
}

span {
    margin-right: 10px;
}

a {
    margin-right: 5px;
}


nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}
</style>