import React from "react";
import five from './assets/5.jpg'

export default function Card(props){


    return(
        <div className="card">
           <div></div>
            <div className="card--image">
                <img src={props.image}/>
            </div>
            <div className="star--heart">
            <div class="ratting">
                    <i class='bx bx-star'></i>
                    <i class='bx bx-star'></i>
                    <i class='bx bx-star'></i>
                    <i class='bx bx-star'></i>
                    <i class='bx bxs-star-half' ></i>
                    <div class="heart-icon">&#10084;</div>
            </div>
                
            </div>
            <div className="card-text">
                <p>{props.name}</p>
                <p>{props.price}</p>
            </div>
        </div>
    )
}