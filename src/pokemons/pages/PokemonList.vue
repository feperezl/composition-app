<script setup lang="ts">
import { ref } from 'vue';

import { getPokemons } from '../helpers/get-pokemons';
import type { Pokemon } from '../interfaces/pokemon';


const  data = await getPokemons();

const pokemons = ref<Pokemon[]>( data );

// getPokemons()
//     .then( (data) => pokemons.value = data);

</script>
<template>
    <div>
        <h1>Pokemon List</h1>

        <ul>
            <li 
            v-for="pokemon in pokemons"
            :key="pokemon.id">
                {{ pokemon.name }}
            </li>
        </ul>
    </div>
</template>
