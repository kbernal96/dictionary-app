import React, {useState} from 'react';
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    let [results, setResults] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        
        axios.get(url).then(handleResponse);
    }

    function handleKeyword(event) {
        setKeyword(event.target.value);
    }
    
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeyword}/>
            </form>
        <Results results={results}/>
        </div>
    )
}