import React from "react";
import '../styles/opalmob.css'
import { useState, useEffect } from "react";
import OpalMobDesc from "./homemobdesc";
import PrismMobDesc from "./prismmobdesc";
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
            <div style={{height: '80px', background: 'black'}}>

            </div>
            <div className="headersectionmob">
                <h1 className="robotnamemob">PRISM</h1>
                <p className="robottypemob">Autonomous Advertising Robot</p>
                <img src="https://faceaqses.s3.amazonaws.com/roboedge/ra100-s3-imp.png" alt="OPAL Robot" style={{ width: '58%' }} />
                <div className="featuresmob">
                    <p>SINGLE DISPLAY  -  8 HOUR BATTERY LIFE  -  INDOOR  -  4K DISPLAY</p>
                </div>
                <div className="horizontalbuttoncontainermob" style={{marginBottom:'5%'}}>
                    <button className="transparentbuttonmob" style={{fontSize:'3.8vw'}}>RENT NOW</button>
                    <button className="blackbutton" style={{fontSize:'3.8vw'}}>BOOK ENQUIRY</button>
                </div>
            </div>
            <PrismMobDesc/>
            <div class="specifications-sectionmob">
                <div
                    className={`specifications-containermob ${shouldAnimate ? "animate" : ""
                        }`}
                >    <h3 class="specifications-titlemob"><span style={{color: '#58D7FF', fontWeight: '300'}}>OPAL</span> SPECIFICATIONS</h3>
                    <div class="specifications-listmob">
                        <div class="specificationmob">
                            <div class="specification-namemob">Dimensions</div>
                            <div class="specification-valuemob"> 100 * 110 * 172 (cm)</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Audio</div>
                            <div class="specification-valuemob"> 150W Speakers</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Speed</div>
                            <div class="specification-valuemob"> 0.5~1 m/s</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Sensors</div>
                            <div class="specification-valuemob">Lidar</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Connectivity</div>
                            <div class="specification-valuemob">5G-LTE / WiFi / Bluetooth</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Continuous Usage Time</div>
                            <div class="specification-valuemob">9 Hours</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Weight</div>
                            <div class="specification-valuemob">70 KG</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Charging Time</div>
                            <div class="specification-valuemob">5 Hours</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Display</div>
                            <div class="specification-valuemob">HEAD 9.2 LCD, Body (Front/Back) 27" Touch LED display</div>
                        </div>
                    </div>
                    <div className="horizontalbuttoncontainermob">
                    <button className="transparentbuttonwhitemob" style={{marginTop:'30px',marginBottom:'55px'}}>USER MANUAL</button>
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
            <div className="lastsectionmob">
                <div className="text-sectionmob">
                    <h1>Advertising has never been more effective</h1>
                    <p>Rent OPAL today and gain a massive boost in customer engagement. Contact us to learn more.</p>
                    <div className="horizontalbuttoncontainermob" style={{marginBottom:'5%'}}>
                    <button className="transparentbuttonmob" style={{fontSize:'15px'}}>RENT NOW</button>
                    <button className="blackbutton" style={{fontSize:'3.8vw'}}>BOOK ENQUIRY</button>
                </div>
                                </div>
                        </div>
        </div>
    );
}