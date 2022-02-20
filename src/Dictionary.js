import React, {useState} from 'react';
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState("");
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }
    
    function search() {
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        
        axios.get(url).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    
    function handleKeyword(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }
    
    if (loaded){        
        return (
            <div className="Dictionary">
                <div className="container">
                <section>
                <form onSubmit={handleSubmit}>
                    <h2>
                        What new word do you want to learn?
                    </h2>
                    <input type="search" autoFocus={true} onChange={handleKeyword}
                    defaultValue={props.defaultKeyword}/>
                </form>
                <div className="suggestion">
                    suggested words: <em>Lickety-split, Hootenanny, Widdershins</em>
                </div>
                </section>
                <Results results={results}/>
                </div>
            </div>
        );
    } else {
        load();
        return "Loading..."
    }
}