import PokemonDetails from './components/PokemonDetails';
import EmptyDetails from './components/EmptyDetails';
import SearchArea from './components/SearchArea';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import PokemonList from './components/PokemonList';
import Loading from './components/Loading';
import Collection from './components/Collection';
import './styles/App.css'

function App(props) {
  const [state, setState] = useState({
    pokemon: null,
    name: '',
    pokemonsOfType: [],
    isTypeListLoading: false,
    collectionView: false,
    catched: false,
    error: ''
  });

  useEffect(()=> {
    console.log("pokemon changed: ", state.pokemon ? state.pokemon : null);
    if(state.pokemon) pokemonInCollection(state.pokemon.name);

  }, [state.pokemon]);
    
  async function pokemonInCollection(pokemonName) {
    console.log(`check if pokemon ${pokemonName} in collection`);
    return axios.get("/api/collection")
    .then(({data: collection}) => collection.some(pokemon => pokemon.name === pokemonName))
    .then(catchStatus => {
      setState(Object.assign({}, state, {catched: catchStatus, error: ''} ));
      console.log(`pokemon after in collection check: ${state.pokemon}`);
    })
    .catch( () => setState(Object.assign({}, state, {error: "can't find your collection"})));
  }
  
  async function handleSubmit(pokemonName) {
    console.log("submiting new pokemon: " + pokemonName);
    axios.get(`/api/pokemon/${pokemonName}`)
      .then((pokemonDetails) => {
        setState(
          Object.assign({}, state, {
          pokemon: pokemonDetails.data,
          pokemonsOfType: [],
          error: ''
        }));
      })
      .catch(()=>{
        setState(Object.assign({}, state, {error: "pokemon wasn't found"}))
      });
  }
  
  function handleTypeList(type) {
    setState(Object.assign({}, state, {isTypeListLoading: true}))
    axios.get(`/api/type/${type}`)
    .then(res => {
      setState(Object.assign({}, state, {isTypeListLoading: false, error: '', pokemonsOfType: res.data.pokemons}));
    })
    .catch( () => setState(Object.assign({}, state, {error: "can't find this type", isTypeListLoading: false})));
    
  }

  return (<>
    <h1>Pokedex</h1>
    <button className="collection-button" onClick={() => setState(Object.assign({}, state, {collectionView: !state.collectionView}))}>collection</button>
    {
      state.collectionView ? 
      <Collection /> :
      <div id="search-section">
          <SearchArea handleSubmit={handleSubmit} />
          <div>{state.error}</div>
          {state.pokemon ? 
            <PokemonDetails 
              showType={handleTypeList}
              pokemon={state.pokemon}
              catched={state.catched}
              checkCatch={() => pokemonInCollection(state.pokemon.name)}/> : 
            <EmptyDetails />}
          {state.isTypeListLoading && state.error === ''? <Loading /> : <PokemonList pokemons={state.pokemonsOfType} handleSubmit={handleSubmit}/>}
        </div>
    }
  </>
  );
}

export default App;