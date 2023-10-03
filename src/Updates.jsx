import React from "react";

export default function UpdatesCard(props){


    return(
        <div className="updates-card">

          <img src={props.image}/>
          <p>
          <strong>{props.date}</strong><br/>
          {props.title}<br/>
          {props.description}<br/>
          </p>

        </div>
    )
}