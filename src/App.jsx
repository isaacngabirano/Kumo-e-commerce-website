import React from "react";
import NavBar from "./NavBar";
import Banner from "./banner";
import ShoppingContainer from "./shopping-container";
import Reviews from "./reviews";
import UpdatesContainer from "./updatescontainer";
import About from "./About";

export default function App(){
   
    return(
     <div>
        <NavBar/>
        <Banner/>
        <ShoppingContainer/>
        <Reviews/>
        <UpdatesContainer/>
        <About/>
     </div>
    )

   

}