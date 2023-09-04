import PrismDesc from "./pearbookdesc";
import { useState, useEffect } from "react";
import PrismMob from "./pearbookmob";
import Navbar from "./Navbar";
import pearbook from '../public/pearbook.png'
import sleekdesign from '../public/sleekdesign.jpg'
import Aos from 'aos';
import Pearbookdesc from "./pearbookdesc";
import Pearbookmob from "./pearbookmob";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faHeadphones, faShippingFast } from "@fortawesome/free-solid-svg-icons";

export default function PearbookPage() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    Aos.init({
      once: true, // Set once to true to only trigger animations once
      duration: 800 // Set the default duration for all animations to 800ms (0.8 seconds)
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".specifications-container");
      const containerOffset = container.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollDistance = window.scrollY;
      const containerHeight = container.offsetHeight;

      const containerInView =
        scrollDistance > containerOffset - windowHeight + 200 &&
        scrollDistance < containerOffset + containerHeight - 200;

      if (containerInView) {
        container.classList.add("animate");
      } else {
        container.classList.remove("animate");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Mobile Version */}
      <div className="opalmob">
        <Pearbookmob />
      </div>

      {/* Desktop Version */}
      <div className="opaldesktop">
        <Navbar />
        <div className="headersection" data-aos="fade-up">
          <h1 className="robotname">PearBook</h1>
          <p className="descpara">
            Experience the future of computing with the PearBook – <br/> a powerful and elegant device that redefines work and play.
          </p>
          <img src={pearbook} alt="OPAL Robot" style={{ width: '35%' }} />
        </div>

        <Pearbookdesc />

        {/* Specifications Section */}
        <div class="specifications-section">
          <div
            className={`specifications-container ${shouldAnimate ? "animate" : ""
              }`}
          >
           <h3 class="specifications-title"><span style={{ color: '#58D7FF', fontWeight: '300' }}>PearBook</span> SPECIFICATIONS</h3>
  <div class="specifications-list">
    <div class="specification">
      <div class="specification-name">Processor</div>
      <div class="specification-value"> AMD Ryzen 7 Quad core</div>
    </div>
    <div class="specification">
      <div class="specification-name">Memory</div>
      <div class="specification-value">16GB DDR4 RAM</div>
    </div>
    <div class="specification">
      <div class="specification-name">Storage</div>
      <div class="specification-value">512GB NVMe SSD</div>
    </div>
    <div class="specification">
      <div class="specification-name">Display</div>
      <div class="specification-value">14-inch Full HD IPS Display</div>
    </div>
    <div class="specification">
      <div class="specification-name">Graphics</div>
      <div class="specification-value">NVIDIA GeForce GTX 3060TI</div>
    </div>
    <div class="specification">
      <div class="specification-name">Operating System</div>
      <div class="specification-value">PearOS (Customized Linux Distro)</div>
    </div>
    <div class="specification">
      <div class="specification-name">Battery Life</div>
      <div class="specification-value">Up to 10 hours</div>
    </div>
    <div class="specification">
      <div class="specification-name">Weight</div>
      <div class="specification-value">1.5 kg</div>
    </div>
    <div class="specification">
      <div class="specification-name">Connectivity</div>
      <div class="specification-value">Wi-Fi 6, Bluetooth 5.0</div>
    </div>
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
