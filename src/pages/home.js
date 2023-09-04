import React, { useState } from "react";
import '../styles/opalpage.css'
import OpalMob from "./homemob";
import Navbar from "./Navbar";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeDesc from "./homedescription";
import lockscreen from '../public/lockscreen.png'
import pearbook from '../public/pearbook.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faHeadphones, faShippingFast } from "@fortawesome/free-solid-svg-icons";

export default function Homepage() {
    const [isPhoneExpanded, setPhoneExpanded] = useState(false);
    const [isComputerExpanded, setComputerExpanded] = useState(false);

    const handlePhoneHover = () => {
        setPhoneExpanded(true);
    };

    const handlePhoneLeave = () => {
        setPhoneExpanded(false);
    };

    const handleComputerHover = () => {
        setComputerExpanded(true);
    };

    const handleComputerLeave = () => {
        setComputerExpanded(false);
    };

    useEffect(() => {
      AOS.init({
        duration: 1400 // Set the default duration for all animations to 1000ms (1 second)
      });
    }, []);

    

    return (
        <div>
            <Navbar className="home-navbar"/>
            <div className="opalmob">
                <OpalMob/>
            </div>
            <div className="opaldesktop" data-aos="fade-up">
                <HomeDesc/>

                <div className="headersection" >
                    <h1 className="robotname" style={{paddingBottom:'2%'}}>Get yours today</h1>
                    <div className="devices-container">
  <div
    className={`device phone ${isPhoneExpanded ? 'expanded' : ''}`}
    onMouseEnter={handlePhoneHover}
    onMouseLeave={handlePhoneLeave}
  >
    <Link to='/products/pearphone'>
    <div className="device-content">
      <h2>PearPhone</h2>
      <p>Your all-in-one communication and productivity companion.</p>
    </div>
    </Link>
  </div>
  <div
    className={`device computer ${isComputerExpanded ? 'expanded' : ''}`}
    onMouseEnter={handleComputerHover}
    onMouseLeave={handleComputerLeave}
  >
    <Link to='/products/pearbook'>
    <div className="device-content">
      <h2>PearBook</h2>
      <p>Powerful computing for work and play, anytime, anywhere.</p>
    </div>
    </Link>
  </div>
</div>
                </div>

        {/* Features Section */}
        <div class="feature-section" style={{background:'#ececec', paddingTop:'3%', paddingBottom:'3%'}}>
            <div class="feature" style={{ color: '#3f3f3f', textAlign: 'center' }}>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <FontAwesomeIcon color="black" icon={faShippingFast} height={'3em'} />
  </div>
  <h3 class="feature-title" style={{ padding: '0 20px' }}>Free Worldwide Shipping</h3>
  <p class="feature-description" style={{ padding: '0 20px' }}>Enjoy free worldwide shipping, and get your items delivered to your doorstep hassle-free.</p>
</div>


  <div class="feature"style={{color:'#3f3f3f'}}>
  <FontAwesomeIcon color="black" icon={faCalendar} height={'3em'} />
    <h3 class="feature-title">3-year Warranty</h3>
    <p class="feature-description" style={{ paddingRight: '100px', paddingLeft: '100px' }}>
              Rest easy with a 3-year warranty that covers your Pear items for any unexpected issues.
            </p>  </div>

  <div class="feature" style={{ color: '#3f3f3f', textAlign: 'center' }}>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <FontAwesomeIcon color="black" icon={faHeadphones} height={'3em'} />
  </div>
  <h3 class="feature-title" style={{ padding: '0 20px' }}>24/7 Customer Support</h3>
  <p class="feature-description" style={{ padding: '0 20px' }}> Our dedicated customer support team is available around the clock to assist you with any inquiries.</p>
</div>

</div>
            </div>

        </div>
    );
}