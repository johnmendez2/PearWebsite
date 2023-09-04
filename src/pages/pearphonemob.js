import React from "react";
import '../styles/opalmob.css'
import { useState, useEffect } from "react";
import phonepic from '../public/lockscreen.png'
import spotifyphone from '../public/spotifyphone.png'
import Pearbookmobdesc from "./pearbookmobdesc";
import Navbar from "./Navbar";
import PrismMobDesc from "./pearphonemobdesc";
export default function PrismMob(){
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const container = document.querySelector(".specifications-containermob");
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
            <Navbar/>
            <div className="headersection" data-aos="fade-up">
                <h1 className="robotname">PearPhone</h1>
                <p className="descpara" style={{fontSize:'1.2rem', paddingLeft:'20px', paddingRight:'20px'}}>Experience the future with PearPhone, where innovation meets elegance.</p>
                <img src={phonepic} alt="OPAL Robot" style={{ width: '100%' }} />
            </div>
            <PrismMobDesc/>
            <div class="specifications-sectionmob">
                <div
                    className={`specifications-containermob ${shouldAnimate ? "animate" : ""
                        }`}
                >    <h3 class="specifications-titlemob"><span style={{color: '#58D7FF', fontWeight: '300'}}>PearPhone</span> SPECIFICATIONS</h3>
                    <div class="specifications-listmob">
                        <div class="specificationmob">
                            <div class="specification-namemob">Dimensions</div>
                            <div class="specification-valuemob"> 160 x 70 x 8.5 mm</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Weight</div>
                            <div class="specification-valuemob">  175 grams</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Display</div>
                            <div class="specification-valuemob"> 6.4-inch Super AMOLED</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Processor</div>
                            <div class="specification-valuemob">Octa-core Snapdragon 888</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Storage</div>
                            <div class="specification-valuemob">64GB; 128GB; 256GB</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Camera</div>
                            <div class="specification-valuemob">14MP Ultra-wide Camera</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Battery</div>
                            <div class="specification-valuemob">4,500 mAh</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Operating System</div>
                            <div class="specification-valuemob">PearOS</div>
                        </div>
                    </div>
                            </div>

            </div>

            {/* <div class="feature-section">
  <div class="feature">
    <h3 class="feature-title">Autopilot</h3>
    <p class="feature-description">Experience the future of driving with Tesla's advanced Autopilot system. Navigate highways, change lanes, and park effortlessly with cutting-edge technology.</p>
  </div>

  <div class="feature">
    <h3 class="feature-title">Long Range</h3>
    <p class="feature-description">Enjoy the freedom to go the distance. Tesla's long-range batteries provide exceptional range, enabling you to embark on long journeys with confidence.</p>
  </div>

  <div class="feature">
    <h3 class="feature-title">Supercharging</h3>
    <p class="feature-description">Recharge your Tesla quickly and conveniently at our extensive Supercharger network. Spend less time charging and more time on the road.</p>
  </div>
</div> */}
            <div className="desc4k" style={{backgroundImage: `url(${spotifyphone})`, backgroundSize: 'cover', backgroundPosition: 'center', height:'38rem'}} >
                        <div className='desc4ktext' style={{color:'white'}}data-aos="fade-up">
                                    </div>
            </div>
        </div>
    );
}