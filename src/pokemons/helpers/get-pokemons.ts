import pokemonApi from '@/pokemons/api/pokemonApi';
import type { PokemonResponse, PokemonListResponse } from '@/pokemons/interfaces';
import type { Pokemon } from '@/pokemons/interfaces/pokemon';
import axios from 'axios';


// funcion para obtener los pokemons
// específicamente: los 45 primeros pokemons

export const getPokemons = async(): Promise<Pokemon[]> => {

    await sleep(2);
    
    const { data } = await pokemonApi.get('/pokemon?limit=45')

    const pokemonPromises: Promise<Pokemon>[] = [];
     
    for (const { url } of data.results) {
        const pokemonPromise = axios.get<PokemonResponse>(url).then (( {data}) => {
        return {
            id: data.id,
            name: data.name,
            frontSprite: data.sprites.front_default
        }       
        });

        pokemonPromises.push(pokemonPromise);
    }
    
    const pokemons = await Promise.all(pokemonPromises);
    return pokemons;

    }
