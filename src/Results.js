import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
   if (props.results) {
       return (
       <div className="Results">
        <section>
           <h2 className="text-capitalize">{props.results.word}</h2>

           {props.results.phonetics.filter(function (phonetic) {
               return phonetic.audio.length > 0;
            })
            .map(function (phonetic, index) {
                if (index === 0) {
                    return (
                        <div key={index}>
                            <Phonetic phonetic={phonetic} />
                        </div>
                    );
                } else {
                    return null;
                }
            })}
        </section>

           {/*looping through object passed from props.results.word*/}

           {props.results.meanings.map(function(meaning, index) {
               return (
                    <section key={index}>

                        {/*sending the object to Meaning component to loop through each meaning*/}

                        <Meaning meaning={meaning} />
                    </section>
                       
               )
           })}
       </div>
    );
   } else {
       return null;
   }
} 