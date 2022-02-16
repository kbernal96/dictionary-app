import React, {useState} from 'react';
import axios from "axios";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        alert(`searching ${keyword}`);
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
        </div>
    )
}