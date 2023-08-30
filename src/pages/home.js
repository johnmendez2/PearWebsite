import React from "react";
import '../styles/opalpage.css'
import { useState, useEffect } from "react";
import OpalDesc from "./homedescription";
import OpalMob from "./homemob";
import Navbar from "./Navbar";
export default function Opalpage() {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    return (
        <div>
            <Navbar/>
            <div className="opalmob">
            <OpalMob/>
            </div>
            <div className="opaldesktop">
            <OpalDesc/>

            <div className="headersection" style={{height:'1000px'}}>
            <h1 className="robotname">Get yours today</h1>
                        {/* todo:
            Create animation for PearPhone and PearBook
            */}
            </div>

            <div class="feature-section" style={{background:'#ececec', paddingTop:'3%', paddingBottom:'3%'}}>
  <div class="feature" style={{color:'#3f3f3f'}}>
    <h3 class="feature-title">Free Worldwide Shipping</h3>
    <p class="feature-description" style={{paddingRight:'80px', paddingLeft:'80px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
  </div>

  <div class="feature"style={{color:'#3f3f3f'}}>
    <h3 class="feature-title">3-year Warranty</h3>
    <p class="feature-description"style={{paddingRight:'80px', paddingLeft:'80px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
  </div>

  <div class="feature"style={{color:'#3f3f3f'}}>
    <h3 class="feature-title">24/7 Customer Support</h3>
    <p class="feature-description"style={{paddingRight:'80px', paddingLeft:'80px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
  </div>
</div>

            </div>

        </div>
    );
}