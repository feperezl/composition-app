import type { RouteRecordRaw } from "vue-router";

const ROUTE_NAME = 'pokemons';

// rutas hijas 
export const pokemonRoute: RouteRecordRaw = {
    path: `/${ ROUTE_NAME }`,
    redirect: `/${ ROUTE_NAME }/list`,
    component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
    children: [
        {
            path: `/${ ROUTE_NAME}/by/:id`,
            props: { title: 'Pokémon por ID'},
            component: () => import('@/pokemons/pages/PokemonById.vue')
        },
        {
            path: `/${ ROUTE_NAME}/list`,
            props: { title: 'Lista de Pokémon'},
            component: () => import('@/pokemons/pages/PokemonList.vue')
        },
        {
            path: `/${ ROUTE_NAME}/search`,
            props: { title: 'Buscar Pokémon'},
            component: () => import('@/pokemons/pages/PokemonSearch.vue')
        }
    ]
}