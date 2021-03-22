import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../styles/Collection.css"

function Collection(props) {
    const [state, setState] = useState({
        collection: [],
    });

    useEffect(() => {
        axios.get("/api/collection")
        .then( ({data}) => setState({collection: data}));  
    }, []);

    return (
        <div className="collection-pokemon">
            <ul>
                {state.collection.map((pokemon, i) => {
                return <li key={i}>
                    {pokemon.name}
                    <img src={pokemon.sprites.smallSprite} alt=""/>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Collection