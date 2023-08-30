import '../styles/opaldesc.css'
import { useState,useEffect } from 'react';
import avatar from '../avatar.png'
import opalsensors from '../opalsensors.jpg'
export default function OpalDesc(){
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const container = document.querySelector(".desc4ktext");
          const containerOffset = container.offsetTop;
          const windowHeight = window.innerHeight;
          const scrollDistance = window.scrollY;
          const containerHeight = container.offsetHeight;
      
          const containerInView =
            scrollDistance > containerOffset - windowHeight + 100 &&
            scrollDistance < containerOffset + containerHeight - 100;
      
          if (containerInView) {
            container.classList.add("animate");
          }
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);




      useEffect(() => {
        const handleScroll = () => {
          const container = document.querySelector(".futuretext-section");
          const containerOffset = container.offsetTop;
          const windowHeight = window.innerHeight;
          const scrollDistance = window.scrollY;
          const containerHeight = container.offsetHeight;
      
          const containerInView =
            scrollDistance > containerOffset - windowHeight + 100 &&
            scrollDistance < containerOffset + containerHeight - 100;
      
          if (containerInView) {
            container.classList.add("animate");
          } 
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);


      

    return(
        <div>
            <div className="desc4k" style={{background:'#232323', marginBottom: '-100px'}}>
            {/* <div className="desc4k" style={{marginTop: '-2%' , background:'linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%)'}}> */}
            <div className='desc4ktext' style={{color:'white'}}>
            <h1 className={`descname`}>Lorem Ipsum dolor</h1>
                <p className="descpara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam</p>
            </div>
            </div>

            <div className="lastsection" style={{backgroundColor:'#232323', paddingBottom:'20px'}}>
            <div className="text-section" style={{color: 'white'}}>
                    <h1 className='descname'>Lorem Ipsum</h1>
                    <p className='futurepara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
            <div className="futureimage-section">
            <img src={avatar} alt="Avatar" style={{ width: '18rem', marginRight: '5%', textAlign: 'center' }} />                          </div>
                        </div>


            <div className="futuresection" style={{backgroundColor:'#232323', paddingBottom:'20px'}}>
            <div className="futureimage-section" >
            <img src={avatar} alt="Avatar" style={{ width: '18rem', marginRight: '15%' }} />                 </div>
                <div className="futuretext-section" style={{color: 'white'}}>
                    <h1 className='descname'>Lorem Ipsum</h1>
                    <p className='futurepara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                </div>       
                        </div>

          
      


          

        </div>
    )

}