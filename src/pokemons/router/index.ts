import { compile } from 'vue';
import type { RouteRecordRaw } from 'vue-router';


const ROUTE_NAME = 'pokemons';

export const pokemonRoute: RouteRecordRaw = {
    path: `/${ROUTE_NAME}`,
    component: () => import('@/pokemons/layouts/PokemonsLayout.vue'),
    children: [
        {
            path: `/${ ROUTE_NAME }/list`,
            component:() => import ('@/pokemon/pages/PokemonList.vue')
        }
    ]

}