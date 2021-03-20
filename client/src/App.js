import PokemonDetails from './components/PokemonDetails';
import EmptyDetails from './components/EmptyDetails';
import SearchArea from './components/SearchArea';
import React, { Component } from 'react';
import axios from 'axios'
import PokemonList from './components/PokemonList';
import Loading from './components/Loading';
import Collection from './components/Collection';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      pokemon: null,
      name: '',
      pokemonsOfType: [],
      isTypeListLoading: false,
      collectionView: false,
      catched: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTypeList = this.handleTypeList.bind(this)
    this.pokemonInCollection = this.pokemonInCollection.bind(this) 
  }
  async pokemonInCollection(pokemonName) {
    return axios.get("/api/collection")
    .then(({data: collection}) => collection.some(pokemon => pokemon.name === pokemonName))
    .then(catchStatus => this.setState({catched: catchStatus}));
}
  async handleSubmit(pokemonName) {
    axios.get(`/api/pokemon/${pokemonName}`)
    .then((pokemonDetails) => {
      this.setState({
        pokemon: pokemonDetails.data,
        pokemonsOfType: [],
      });
      this.pokemonInCollection(pokemonName);
    });
  }
  
  handleTypeList(type) {
    this.setState({isTypeListLoading: true})
    axios.get(`/api/type/${type}`)
    .then(res => {
      this.setState({pokemonsOfType: res.data.pokemons});
      this.setState({isTypeListLoading: false});
    });
    
  }

  render() {
    return (<>
      <h1>Pokedex</h1>
      <button onClick={() => this.setState({collectionView: !this.state.collectionView})}>collection</button>
      {
        this.state.collectionView ? 
          <Collection /> :
          <>
            <SearchArea handleSubmit={this.handleSubmit} />
            {this.state.pokemon ? 
              <PokemonDetails 
                showType={this.handleTypeList}
                pokemon={this.state.pokemon}
                catched={this.state.catched}
                checkCatch={() => this.pokemonInCollection(this.state.pokemon.name)}/> : 
              <EmptyDetails />}
            {this.state.isTypeListLoading ? <Loading /> : <PokemonList pokemons={this.state.pokemonsOfType} handleSubmit={this.handleSubmit}/>}
          </>
      }
    </>
    );
  }
}

export default App;