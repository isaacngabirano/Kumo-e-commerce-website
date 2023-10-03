import React from "react";
import team from './assets/team-1.jpg'



export default function Reviews(){
    return(
    <div className="reviews">
        <h2>Client Reviews</h2>
        <div className="review-image">
            <img src={team}/>
        </div>
         <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna<br/>
         aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/> Duis
         aute irure dolor in reprehenderit in voluptate velit esse cillum.
         </p>
         <h3>Mark Jevenue
         <p>CEO of Addle</p>
         </h3>
         
    </div>
    )
}