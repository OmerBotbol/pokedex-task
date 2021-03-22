import React, { useState } from 'react';
import "../styles/SearchArea.css"

function SearchArea(props) {
    const [state, setState] = useState({value: ''});

    function handleChange(event){
        setState({value: event.target.value})
    }

    return (
        <form>
            <input type="text" value={state.value} className="search-area" onChange={handleChange}/>
            <button type="button" onClick={()=>props.handleSubmit(state.value)}>Search</button>
        </form>
    );
}

export default SearchArea;