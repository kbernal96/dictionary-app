import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h5>{props.meaning.partOfSpeech}</h5>

            {props.meaning.definitions.map(function(definition, index) {
                return (
                    <div key={index}>
                        <p>
                            {definition.definition}
                        </p>
                        
                        <Synonyms synonym={definition.synonyms} />
                        

                    </div>
                )
            })}
        </div>
    )
}