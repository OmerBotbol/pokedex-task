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
      name: '',
      pokemonsOfType: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTypeList = this.handleTypeList.bind(this)
  }
  
  handleSubmit(pokemonName){
    this.setState({name: pokemonName})
    axios.get(`/api/pokemon/${pokemonName}`).then((pokemonDetails)=>{
      this.setState({pokemon: pokemonDetails.data})
    })
  }
  
  handleTypeList(type) {
    axios.get(`/api/type/${type}`)
    .then(res => {
      this.setState({pokemonsOfType: res.data.pokemons});
    });
    
  }

  render() {
    console.log(this.state.pokemonsOfType);
    return (<>
      <h1>Pokedex</h1>
      <SearchArea handleSubmit={this.handleSubmit} />
      {this.state.pokemon ? <PokemonDetails showType={this.handleTypeList} pokemon={this.state.pokemon} /> : <EmptyDetails />}
      <ul>
        {this.state.pokemonsOfType.map(pokemon => <li>{pokemon}</li>)}
      </ul>
    </>
    );
  }
}

export default App;