import React from "react";
import one from './assets/bl-1.png'
import two from './assets/bl-2.png'
import three from './assets/bl-3.png'
import UpdatesCard from "./updates";


export default function UpdatesContainer(){
return(
    <>
        <h1 className="updates-h1">New Updates</h1>
        <div className="updates-container">
    
    <UpdatesCard
        image={one}
        date='26 Jan 2022'
        title='Lets Start bring sale on this summer vacation.'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
    />
    <UpdatesCard
        image={two}
        date='26 Jan 2022'
        title='Lets Start bring sale on this summer vacation.'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
    />
    <UpdatesCard
        image={three}
        date='26 Jan 2022'
        title='Lets Start bring sale on this summer vacation.'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
    />
</div>
    </>
 
)
}