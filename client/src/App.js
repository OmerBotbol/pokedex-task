import PokemonDetails from './components/PokemonDetails';
import EmptyDetails from './components/EmptyDetails';
import SearchArea from './components/SearchArea';
import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      pokemon: null,
      name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit(pokemonName){
    this.setState({name: pokemonName})
    axios.get(`/api/pokemon/${pokemonName}`).then((pokemonDetails)=>{
      this.setState({pokemon: pokemonDetails.data})
    })
  }
  
  render() {
    return (<>
      <h1>Pokedex</h1>
      <SearchArea handleSubmit={this.handleSubmit} />
      {this.state.pokemon ? <PokemonDetails pokemon={this.state.pokemon} /> : <EmptyDetails />}
      
    </>
    );
  }
}

export default App;