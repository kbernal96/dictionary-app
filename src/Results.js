import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
   if (props.results) {
       return (
       <div className="Results">
           <h2 className="text-capitalize">{props.results.word}</h2>

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