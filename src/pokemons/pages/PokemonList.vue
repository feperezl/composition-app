<script setup lang="ts">
import { usePokemons } from '@/pokemons/composables/usePokemons';

const { count, pokemons, isLoading } = usePokemons();
</script>
<template>
    <div>
        <h1>Pokemon List - ({{ count }})</h1>

        <h3 v-if="isLoading">Cargando</h3>

        <ul>
            <li 
            v-for="pokemon in pokemons"
            :key="pokemon.id">
                {{ pokemon.name }}
            </li>
        </ul>
    </div>
</template>
