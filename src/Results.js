import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
   if (props.results) {
       return (
       <div className="Results">
           <h2 className="text-capitalize">{props.results.word}</h2>

            {props.results.phonetics.map(function(phonetic, index) {
                return (
                    <div key={index}>
                        <Phonetic phonetic={phonetic} />
                    </div>
                );
            })}

           {/*looping through object passed from props.results.word*/}

           {props.results.meanings.map(function(meaning, index) {
               return (
                    <div key={index}>

                        {/*sending the object to Meaning component to loop through each meaning*/}

                        <Meaning meaning={meaning} />
                    </div>
                       
               )
           })}
       </div>
    );
   } else {
       return null;
   }
} 