<script setup lang="ts">

import pokemonApi from '../api/pokemonApi';

pokemonApi.get('/pokemon?limit=45') 
    .then( resp => console.log(resp.data.results[0].pokename()) 



</script>
<template>
    <div>
        <h1>Pokemon List</h1>
    </div>
</template>
