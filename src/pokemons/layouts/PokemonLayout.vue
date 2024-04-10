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
    <NavBar :links="routeLinks" is-secondary />
    <div>
        <!-- <h1>Pokemon Layout</h1> -->
        <Supense>
            <RouterView />
        
            <template #fallback>
                Loading...
            </template>
        </Supense>
    </div>
</template>
