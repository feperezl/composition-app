<script setup lang="ts">

import pokemonApi from '../api/pokemonApi';


pokemonApi.get('/pokemon?limit=45')
    .then( data => console.log(resp.data)
</script>
<template>
    <div>
        <h1>Pokemon List</h1>
    </div>
</template>
