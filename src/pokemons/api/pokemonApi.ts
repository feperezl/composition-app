import axios from 'axios';

const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    headers: {
        'Content-Type': 'application/json',
    },

});

export default pokemonApi;