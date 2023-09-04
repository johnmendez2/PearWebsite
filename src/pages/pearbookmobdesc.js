import '../styles/opaldesc.css'
import { useState,useEffect } from 'react';
import avatar from '../avatar.png'
import opalsensors from '../opalsensors.jpg'
import processor from '../public/processor.jpg'
import dolby from '../public/dolby.jpg'
import sleekdesign from '../public/sleekdesign.jpg'
import preview from '../public/preview.jpg'
import usingpearbook from '../public/usingpearbook.jpg'
import usinglaptop from '../public/usinglaptop.jpg'
import pearos from '../public/pearOS.svg'
import Aos from 'aos';
export default function Pearbookmobdesc(){
    const [shouldAnimate, setShouldAnimate] = useState(false);
    useEffect(() => {
      Aos.init({
        duration: 800 // Set the default duration for all animations to 1000ms (1 second)
      });
    }, []);
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
            <div className="desc4k" style={{marginTop: '-2%' , background:'white'}} data-aos="fade-up">
            {/* <div className="desc4k" style={{marginTop: '-2%' , background:'linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%)'}}> */}
            <div className='desc4ktext' style={{color:'black',padding: '10px'}}>
            <h1 className={`descname`}>Sleek Design</h1>
                <p className="descpara" style={{paddingLeft: '0', width: '100%', fontSize: '1.1rem'}}>Experience a modern and elegant design that combines style with functionality.</p>
            </div>
            <div className='headersection' style={{height:'auto'}}>
                    <img src={sleekdesign} alt="Avatar"style={{ width: '90%' }} />
                    </div>
            </div>


            <div className="desc4k" style={{marginTop: '-2%' , background:'white'}} data-aos="fade-up">
            {/* <div className="desc4k" style={{marginTop: '-2%' , background:'linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%)'}}> */}
            <div className='desc4ktext' style={{color:'black',padding: '10px'}}>
            <h1 className={`descname`}>14" Display</h1>
                <p className="descpara" style={{paddingLeft: '0', width: '100%', fontSize: '1.1rem'}}>Enjoy a vibrant 14-inch display that brings your content to life.</p>
            </div>
            <div className='headersection'  style={{height:'auto'}}>
                    <img src={preview} alt="Avatar"style={{ width: '90%' }} />
                    </div>
            </div>

            <div className="desc4k" style={{marginTop: '-2%' , background:'white'}} data-aos="fade-up">
            {/* <div className="desc4k" style={{marginTop: '-2%' , background:'linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%)'}}> */}
            <div className='desc4ktext' style={{color:'black',padding: '10px'}}>
            <div className='headersection'  style={{height:'auto'}}>
                    <img src={pearos} alt="Avatar"style={{ width: '90%' }} />
                    </div>
                <p className="descpara" style={{paddingLeft: '0', width: '100%', fontSize: '1.1rem'}}> Powered by PearOS, our customized operating system for seamless performance.</p>
            </div>
            </div>

            <div className="desc4k" style={{backgroundImage: `url(${usinglaptop})`, backgroundSize: 'cover', backgroundPosition: 'center', height:'35rem'}} >
                        <div className='desc4ktext' style={{color:'white'}}data-aos="fade-up">
                                    </div>
            </div>

            <div className="desc4k" style={{marginTop: '-2%' , background:'black'}}>
            {/* <div className="desc4k" style={{marginTop: '-2%' , background:'linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%)'}}> */}
            <div className='desc4ktext' style={{color:'white',padding: '10px'}}data-aos="fade-up">
            <div className='headersection'  style={{height:'auto'}}data-aos="fade-up">
                    <img src={dolby} alt="Avatar"style={{ width: '90%' }} />
                    </div>
                <p className="descpara" style={{paddingLeft: '0', width: '100%', fontSize: '1.1rem'}}>Immerse yourself in high-quality audio with Dolby Atmos sound technology.</p>
            </div>
            </div>

            <div className="desc4k" style={{marginTop: '-2%' , background:'black'}}>
            {/* <div className="desc4k" style={{marginTop: '-2%' , background:'linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%)'}}> */}
            <div className='desc4ktext' style={{color:'white',padding: '10px'}} data-aos="fade-up">
            <div className='headersection'  style={{height:'auto'}} data-aos="fade-up">
                    <img src={processor} alt="Avatar"style={{ width: '90%' }} />
                    </div>
                <p className="descpara" style={{paddingLeft: '0', width: '100%', fontSize: '1.1rem'}}>Powered by an AMD Ryzen 7 processor for exceptional performance and efficiency.</p>
            </div>
            </div>


        </div>
    )

}