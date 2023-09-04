import PrismDesc from "./pearphonedesc";
import { useState, useEffect } from "react";
import PrismMob from "./pearphonemob";
import Navbar from "./Navbar";
import phonepic from '../public/lockscreen.png'
import spotify from '../public/spotify.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faCalendar, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
export default function PrismPage(){
    const [shouldAnimate, setShouldAnimate] = useState(false);
    useEffect(() => {
      Aos.init({
        duration: 800, // Set the default duration for all animations to 1000ms (1 second)
        once: true, // Set once to true to only trigger animations once
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
                        <div className="opalmob">
            <PrismMob/>
            </div>
            <div className="opaldesktop">
            <Navbar/>
            <div className="headersection" data-aos="fade-up">
                <h1 className="robotname">PearPhone</h1>
                <p className="descpara">Experience the future with PearPhone, where innovation meets elegance.</p>
                <img src={phonepic} alt="OPAL Robot" style={{ width: '35%' }} />
            </div>
            <PrismDesc/>
            <div className="specifications-section">
          <div
            className={`specifications-container ${shouldAnimate ? "animate" : ""}`}
          >
            <h3 className="specifications-title"><span style={{ color: '#58D7FF', fontWeight: '300' }}>PearPhone</span> SPECIFICATIONS</h3>
            <div className="specifications-list">
              <div className="specification">
                <div className="specification-name">Dimensions</div>
                <div className="specification-value"> 160 x 70 x 8.5 mm</div>
              </div>
              <div className="specification">
                <div className="specification-name">Weight</div>
                <div className="specification-value"> 175 grams</div>
              </div>
              <div className="specification">
                <div className="specification-name">Display</div>
                <div className="specification-value"> 6.4-inch Super AMOLED</div>
              </div>
              <div className="specification">
                <div className="specification-name">Processor</div>
                <div className="specification-value"> Octa-core Snapdragon 888</div>
              </div>
              <div className="specification">
                <div className="specification-name">Storage</div>
                <div className="specification-value"> 64GB; 128GB; 256GB</div>
              </div>
              <div className="specification">
                <div className="specification-name">Camera</div>
                <div className="specification-value"> 14MP Ultra-wide Camera</div>
              </div>
              <div className="specification">
                <div className="specification-name">Battery</div>
                <div className="specification-value"> 4,500 mAh</div>
              </div>
              <div className="specification">
                <div className="specification-name">Operating System</div>
                <div className="specification-value"> PearOS</div>
              </div>
            </div>
          </div>

            </div>
            <div className="headersection" style={{height:'auto', paddingTop:'2%', paddingBottom:'2%'}} data-aos="fade-up">
                              <img src={spotify} alt="OPAL Robot" style={{ width: '45%'}} />
            </div>


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