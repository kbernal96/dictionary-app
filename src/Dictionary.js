import React, {useState} from 'react';
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos.js";
import "./Dictionary.css";

export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState("");
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState([]);

    function handleDictionaryResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        console.log(response);
        setPhotos(response.data.photos);
    }
    
    function search() {
        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        
        axios.get(url).then(handleDictionaryResponse);

        /*api key will be used in the axios call with 
        the keyword (default key word, searched word)*/
        const pexelsApiKey = `563492ad6f91700001000001491d941c0038465aa3b95d040c37d620`;
        
        let pexelsApiURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiURL, {headers: headers}).then(handlePexelsResponse);
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
                {photos.length > 0 && <Photos photos={photos} />}
                </div>
            </div>
        );
    } else {
        load();
        return "Loading..."
    }
}