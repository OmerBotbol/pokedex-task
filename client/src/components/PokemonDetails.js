import React, { useEffect, useState } from 'react';
import Type from './Type'
import axios from 'axios'

function PokemonDetails(props) {
        const [state, setState] = useState({
            imgSrc: props.pokemon.sprites.front,
            hover: false,
            catched: false,
        });

    // useEffect(() => {
    //     if(state.imgSrc !== props.pokemon.sprites.front && state.imgSrc !== props.pokemon.sprites.back){
    //         setState({imgSrc: props.pokemon.sprites.front})
    //     }
    // }, []);
    
    function switchImg() {
        if(state.hover) {
            return setState({imgSrc: props.pokemon.sprites.front, hover: false});
        }
        return setState({imgSrc: props.pokemon.sprites.back, hover: true});
    }

    async function pokemonInCollection() {
        const {data: collection} = await axios.get("/api/collection");
        console.log("collection: ", collection);
        const isInCollection = collection.some(pokemon => pokemon.id === props.pokemon.id);
        setState({catched: isInCollection});
    }

    async function catchPokemon() {
        await axios.post(`/api/collection/catch/${props.pokemon.name}`);
        props.checkCatch();
    }
    async function release() {
        await axios.delete(`/api/collection/release/${props.pokemon.name}`);
        props.checkCatch();
    }

    return (
        <ul className="details">
            <li>Name: {props.pokemon.name}</li>
            <li>Height {props.pokemon.height}</li>
            <li>Weight: {props.pokemon.weight}</li>
            <li>Types: {props.pokemon.types.map((type, i)=><Type key={i} showType={()=>props.showType(type)} type={type}/>)}</li>
            <img src={state.imgSrc} alt={props.pokemon.name} onMouseEnter={()=>switchImg()} onMouseOut={()=>switchImg()}/>
            <button onClick={()=>{props.catched ? release() : catchPokemon()}}>{props.catched ? "Release" : "Catch"}</button>
    </ul>);
}

export default PokemonDetails;