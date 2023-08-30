import PrismDesc from "./prismdescription";
import { useState, useEffect } from "react";
import PrismMob from "./prismmob";
export default function PrismPage(){
    const [shouldAnimate, setShouldAnimate] = useState(false);

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
            <div style={{height: '80px', background: 'black'}}>
            </div>
            <div className="opaldesktop">
            <div className="headersection">
                <h1 className="robotname">PRISM</h1>
                <p className="robottype">Autonomous Advertising Robot</p>
                <img src="https://faceaqses.s3.amazonaws.com/roboedge/ra100-s3-imp.png" alt="OPAL Robot" style={{ width: '25%' }} />
                <div className="features">
                    <p>TRIPLE DISPLAY  -  8 HOUR BATTERY LIFE  -  INDOOR  -  4K DISPLAY</p>
                </div>
                <div className="horizontalbuttoncontainer" style={{marginBottom:'5%'}}>
                    <button className="transparentbutton" style={{fontSize:'1.2vw'}}>RENT NOW</button>
                    <button className="blackbutton" style={{fontSize:'1.2vw'}}>BOOK ENQUIRY</button>
                </div>
            </div>
            <PrismDesc/>
            <div class="specifications-section">
                <div class="image-container">
                    <img src="https://faceaqses.s3.amazonaws.com/roboedge/ra100-s3-imp.png" alt="Car" class="robot-image" />
                </div>
                <div
                    className={`specifications-container ${shouldAnimate ? "animate" : ""
                        }`}
                >    <h3 class="specifications-title"><span style={{color: '#58D7FF', fontWeight: '300'}}>PRISM</span> SPECIFICATIONS</h3>
                    <div class="specifications-list">
                        <div class="specification">
                            <div class="specification-name">Dimensions</div>
                            <div class="specification-value"> 100 * 110 * 172 (cm)</div>
                        </div>
                        <div class="specification">
                            <div class="specification-name">Audio</div>
                            <div class="specification-value"> 150W Speakers</div>
                        </div>
                        <div class="specification">
                            <div class="specification-name">Speed</div>
                            <div class="specification-value"> 0.5~1 m/s</div>
                        </div>
                        <div class="specification">
                            <div class="specification-name">Sensors</div>
                            <div class="specification-value">Lidar</div>
                        </div>
                        <div class="specification">
                            <div class="specification-name">Connectivity</div>
                            <div class="specification-value">5G-LTE / WiFi / Bluetooth</div>
                        </div>
                        <div class="specification">
                            <div class="specification-name">Continuous Usage Time</div>
                            <div class="specification-value">9 Hours</div>
                        </div>
                        <div class="specification">
                            <div class="specification-name">Weight</div>
                            <div class="specification-value">180 KG</div>
                        </div>
                        <div class="specification">
                            <div class="specification-name">Charging Time</div>
                            <div class="specification-value">5 Hours</div>
                        </div>
                        <div class="specification">
                            <div class="specification-name">Display</div>
                            <div class="specification-value">HEAD 9.2 LCD, Body (Front/Back) 27" Touch LED display</div>
                        </div>
                    </div>

                    <button className="transparentbuttonwhite">USER MANUAL</button>
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
            <div className="lastsection">
                <div className="text-section">
                    <h1>Advertising has never been more effective</h1>
                    <p>Rent OPAL today and gain a massive boost in customer engagement. Contact us to learn more.</p>
                    <button className="transparentbutton">RENT NOW</button>
                    <button className="blackbutton">CONTACT US</button>
                </div>
                <div className="image-section">
                    <img src="https://faceaqses.s3.amazonaws.com/roboads_website/opalRobot.jpg" alt="Product" style={{ width: '40%' }} />
                </div>
            </div>

            </div>


        </div>
    );
}