<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue'
import { pokemonRoute } from '../router';
import type { RouterLink } from '@/router/list-routes';

const routeLinks: RouterLink[] = pokemonRoute.children?.map(({ name, path, props }) => {

    
    return {
        name: name?.toString() ?? '',
        path: path,
        title: (props as { title: string }).title,
    }

}) || [];

</script>
<template>
    <div>
        <NavBar :links="routeLinks" is-secondary />
        <!-- <h1>Pokemon Layout</h1> -->

        <RouterView />
    </div>
</template>
