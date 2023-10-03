import React from "react";
import Card from "./Card";
import one from './assets/1.jpg'
import two from './assets/2.jpg'
import three from './assets/3.jpg'
import four from './assets/4.jpg'
import five from './assets/5.jpg'
import six from './assets/6.jpg'
import seven from './assets/7.jpg'
import eight from './assets/8.jpg'


export default function ShoppingContainer(){

    return(
        <>
<h1 className="container-title">Our Trending <span>Products</span> </h1>
<div className="container">
            <Card
                image={one}
                name='Flix Flox Jeans'
                price='$99 - $129'
            />
            <Card
                image={two}
                name='Formal Men Lowers'
                price='$99 - $129'
            />
            <Card
                image={two}
                name='Half Running Suit'
                price='$99 - $129'
            />
            <Card
                image={three}
                name='Half Fancy Lady Dress'
                price='$99 - $129'
            />
            <Card
                image={four}
                name='Flix Flox Jeans'
                price='$99 - $129'
            />
            <Card
                image={five}
                name='Fancy Salwar Suits'
                price='$99 - $129'
            />
            <Card
                image={six}
                name='Printed Straight Kurta'
                price='$99 - $129'
            />
            <Card
                image={seven}
                name='Collot Full Dress'
                price='$99 - $129'
            />
            <Card
                image={four}
                name='Flix Flox Jeans'
                price='$99 - $129'
            />
                    
        </div>

        </>
       
    )

}