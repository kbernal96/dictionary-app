import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h5>{props.meaning.partOfSpeech}</h5>

            {props.meaning.definitions.map(function(definition, index) {
                return (
                    <div key={index}>
                        <p className="definition">
                            {definition.definition}
                        </p>

                        <p className="example"> {definition.example}</p>
                        
                        <Synonyms synonym={definition.synonyms} />
                        

                    </div>
                )
            })}
        </div>
    )
}