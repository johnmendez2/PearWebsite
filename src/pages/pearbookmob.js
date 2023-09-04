import React from "react";
import '../styles/opalmob.css'
import { useState, useEffect } from "react";
import OpalMobDesc from "./homemobdesc";
import PrismMobDesc from "./pearphonemobdesc";
import pearbook from '../public/pearbook.png'
import Pearbookmobdesc from "./pearbookmobdesc";
import Navbar from "./Navbar";
export default function Pearbookmob(){
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
                <h1 className="robotname">PearBook</h1>
                <p className="descpara" style={{fontSize:'1.2rem', paddingLeft:'20px', paddingRight:'20px'}}> Experience the future of computing with the PearBook – <br/> a powerful and elegant device that redefines work and play.</p>
                <img src={pearbook} alt="OPAL Robot" style={{ width: '85%' }} />
            </div>
            <Pearbookmobdesc/>
            <div class="specifications-sectionmob">
                <div
                    className={`specifications-containermob ${shouldAnimate ? "animate" : ""
                        }`}
                >    <h3 class="specifications-titlemob"><span style={{color: '#58D7FF', fontWeight: '300'}}>PearBook</span> SPECIFICATIONS</h3>
                    <div class="specifications-listmob">
                        <div class="specificationmob">
                            <div class="specification-namemob">Processor</div>
                            <div class="specification-valuemob"> AMD Ryzen 7 Quad core</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Memory</div>
                            <div class="specification-valuemob"> 16GB DDR4 RAM</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Storage</div>
                            <div class="specification-valuemob"> 512GB NVMe SSD</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Display</div>
                            <div class="specification-valuemob">14-inch Full HD IPS Display</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Graphics</div>
                            <div class="specification-valuemob">NVIDIA GeForce GTX 3060TI</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Operating System</div>
                            <div class="specification-valuemob">PearOS (Customized Linux Distro)</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Battery Life</div>
                            <div class="specification-valuemob">Up to 10 hours</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Weight</div>
                            <div class="specification-valuemob">1.5 kg</div>
                        </div>
                        <div class="specificationmob">
                            <div class="specification-namemob">Connectivity</div>
                            <div class="specification-valuemob">Wi-Fi 6, Bluetooth 5.0</div>
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
        </div>
    );
}