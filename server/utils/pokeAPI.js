const { default: axios } = require("axios");
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

// You can use this file to write helper functions

async function getPokemon(name) {
    try {
        const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${name}`);
        const pokemon = response.data;
        const pokemonData = {
            name: pokemon.name,
            id: pokemon.id,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types.map(element => element.type.name),
            sprites: {
                front: pokemon.sprites.front_default,
                back: pokemon.sprites.back_default,
            }
        }
        return pokemonData
    } catch (error) {
        console.log(error.message);
        throw "pokemon not found";
    }
};

async function getType(type) {
    try{
        const response = await axios.get(`${POKEAPI_BASE_URL}/type/${type}`);
        const typeResponse = response.data;
        const typeData = {
            id: typeResponse.id,
            name: typeResponse.name,
            pokemons: typeResponse.pokemon.map((element)=> element.pokemon.name),
        }
        return typeData
    }
    catch (error){
        console.log(error.message);
        throw "type not found";
    }
    
}

module.exports = {getPokemon, getType}