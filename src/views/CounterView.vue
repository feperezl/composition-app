<script setup lang="ts">
import { ref } from 'vue';

const counter = ref(0);
const increase = () =>
    counter.value++;
const decrease = () =>
    counter.value--;

</script>

<template>
    <h1>Counter View: {{ counter }}</h1>
    <button @click="increase">
        + 1
    </button>
    <button @click="decrease">
        - 1
    </button>
</template>