import React, {useState} from "react";

export default function Synonyms(props) {
   

    if (props.synonym) {
        return (
            <div className="Synonyms">
                Synonyms: 

                {props.synonym.map(function(synonym, index) {
                    return <li key={index}>{synonym}</li>;
                })}

            </div>
        )
    } else {
        return null;
    }
}