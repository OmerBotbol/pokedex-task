import PokemonDetails from './components/PokemonDetails';
import EmptyDetails from './components/EmptyDetails';
import SearchArea from './components/SearchArea';
import React, { Component } from 'react';
import axios from 'axios'
import PokemonList from './components/PokemonList';
import Loading from './components/Loading';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      pokemon: null,
      name: '',
      pokemonsOfType: [],
      isTypeListLoading: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTypeList = this.handleTypeList.bind(this)
  }
  
  handleSubmit(pokemonName){
    this.setState({name: pokemonName})
    axios.get(`/api/pokemon/${pokemonName}`).then((pokemonDetails)=>{
      console.log(pokemonDetails.data)
      this.setState({pokemon: pokemonDetails.data, pokemonsOfType: []})
    })
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
      <SearchArea handleSubmit={this.handleSubmit} />
      {this.state.pokemon ? <PokemonDetails showType={this.handleTypeList} pokemon={this.state.pokemon} /> : <EmptyDetails />}
      {this.state.isTypeListLoading ? <Loading /> : <PokemonList pokemons={this.state.pokemonsOfType} handleSubmit={this.handleSubmit}/>}
      
    </>
    );
  }
}

export default App;