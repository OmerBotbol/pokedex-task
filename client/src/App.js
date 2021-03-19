import PokemonDetails from './components/PokemonDetails';
import SearchArea from './components/SearchArea';
import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      pokemon: '',
      name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidUpdate(){
    axios.get(`/api/pokemon/${this.state.name}`).then((pokemonDetails)=>{
      this.setState({pokemon: pokemonDetails.data})
    })
  }
  
  handleSubmit(pokemonName){
    this.setState({name: pokemonName})
  }
  
  render() {
    return (<>
      <h1>Pokedex</h1>
      <SearchArea handleSubmit={this.handleSubmit} />
      <PokemonDetails pokemon={this.state.pokemon} />
    </>
    );
  }
}

export default App;