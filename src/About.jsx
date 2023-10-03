import React from "react";
import logo from './assets/logo.png'


export default function About(){
    return(
        <div className="about">
            <div>
              <img src={logo}/>
              <p>
              3245 Grant Street Longview,<br/>
              TX United Kingdom 765378<br/><br/>
              01601348732<br/><br/>
              Saidulahmed3080@Gmail.Com
              </p>
              <div class="social-icon">
                    <a href="#"><i class='bx bxl-facebook'></i></a>
                    <a href="#"><i class='bx bxl-twitter' ></i></a>
                    <a href="#"><i class='bx bxl-instagram' ></i></a>
                    <a href="#"><i class='bx bxl-youtube' ></i></a>
                    <a href="#"><i class='bx bxl-linkedin' ></i></a>
                </div>
            </div>
            <div>
                <p>
                <h3>SUPPORT</h3><br/>
                Contact Us<br/><br/>
                About Page<br/><br/>
                Size Guide<br/><br/>
                Shopping & Resturns<br/><br/>
                Privacy
                </p>
            </div>
            <div>
                <p>
               <h3>SHOP</h3><br/>
                Men's Shopping<br/><br/>
                Women's Shopping<br/><br/>
                Kids's Shopping<br/><br/>
                Furniture<br/><br/>
                Discount
                </p>
            </div>
            <div>
            <p>
            <h3>COMPANY</h3><br/>
            About<br/><br/>
            Blog<br/><br/>
            Affiliate<br/><br/>
            Login
            </p>
            
            </div>
            <div>
                <p>
                <h3>SUBSCRIBE</h3><br/>
                Receive Updates, Hot Deals,<br/> Discounts Sent Straight In Your<br/> Inbox Daily<br/><br/>

                Lorem Ipsum Dolor Sit Amet<br/> Consectetur Adipisicing Elit.<br/> Eum, Debitis.<br/><br/>

                Receive Updates, Hot Deals,<br/> Discounts Sent Straight<br/> In Your Inbox Daily
                </p>
            </div>
        </div>
    )
}