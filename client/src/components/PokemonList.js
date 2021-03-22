
import PokemonPreview from './PokemonPreview';

function PokemonList(props) {
    return (
        <ul>
            {props.pokemons.map((pokemon, i) =><PokemonPreview key ={i} pokemon={pokemon} handleSubmit={props.handleSubmit}/>)}
        </ul>
    );
}

export default PokemonList;