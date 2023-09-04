import Aos from 'aos';
import '../styles/opaldesc.css'
import { useState, useEffect } from 'react';
import holdingphone from '../public/front-view-hand-holding-smartphone.jpg'
import camerashot from '../public/camerashot.jpg'
import gaming from '../public/gaming.jpg'
import cameraspecs from '../public/cameraspecs.jpg'
import pearphonedisplay from '../public/PearPhone.jpg'
import pearos from '../public/pearOS.svg'
export default function PrismMobDesc(){
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
          <h1 className={`descname`}>Elegant Design</h1>
              <p className="descpara" style={{paddingLeft: '0', width: '100%', fontSize: '1.1rem'}}>Experience the epitome of elegance with our meticulously designed device, crafted to perfection.</p>
          </div>
          <div className='headersection' style={{height:'auto'}}>
                  <img src={holdingphone} alt="Avatar"style={{ width: '90%' }} />
                  </div>
          </div>


          <div className="desc4k" style={{marginTop: '-2%' , background:'white'}} data-aos="fade-up">
          {/* <div className="desc4k" style={{marginTop: '-2%' , background:'linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%)'}}> */}
          <div className='desc4ktext' style={{color:'black',padding: '10px'}}>
          <div className='headersection'  style={{height:'auto'}}>
                  <img src={pearos} alt="Avatar"style={{ width: '90%' }} />
                  </div>
              <p className="descpara" style={{paddingLeft: '0', width: '100%', fontSize: '1.1rem'}}>Harness the power of our advanced operating system, offering a seamless and intuitive user experience.</p>
          </div>
          </div>

          <div className="desc4k" style={{backgroundImage: `url(${pearphonedisplay})`, backgroundSize: 'cover', backgroundPosition: 'center', height:'15rem'}} >
                      <div className='desc4ktext' style={{color:'white'}}data-aos="fade-up">
                                  </div>
          </div>

          <div className="desc4k" style={{marginTop: '-2%' , background:'black'}}>
          {/* <div className="desc4k" style={{marginTop: '-2%' , background:'linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%)'}}> */}
          <div className='desc4ktext' style={{color:'white',padding: '10px'}}data-aos="fade-up">
          <div className='headersection'  style={{height:'auto'}}data-aos="fade-up">
                  <img src={cameraspecs} alt="Avatar"style={{ width: '90%' }} />
                  </div>
              <p className="descpara" style={{paddingLeft: '0', width: '100%', fontSize: '1.1rem'}}>Capture the world with professional-grade camera technology, delivering stunning results with every shot.</p>
          </div>
          </div>

          <div className="desc4k" style={{marginTop: '-2%' , background:'black'}}>
          {/* <div className="desc4k" style={{marginTop: '-2%' , background:'linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%)'}}> */}
          <div className='desc4ktext' style={{color:'white',padding: '10px'}} data-aos="fade-up">
          <div className='headersection'  style={{height:'auto'}} data-aos="fade-up">
                  <img src={camerashot} alt="Avatar"style={{ width: '90%' }} />
                  </div>
              <p className="descpara" style={{paddingLeft: '0', width: '100%', fontSize: '1.1rem'}}>Unleash your creativity with studio-grade editing capabilities, making every project a masterpiece.</p>
          </div>
          </div>

          <div className="desc4k" style={{marginTop: '-2%' , background:'black'}}>
          {/* <div className="desc4k" style={{marginTop: '-2%' , background:'linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%)'}}> */}
          <div className='desc4ktext' style={{color:'white',padding: '10px'}} data-aos="fade-up">
          <div className='headersection'  style={{height:'auto'}} data-aos="fade-up">
                  <img src={gaming} alt="Avatar"style={{ width: '90%' }} />
                  </div>
              <p className="descpara" style={{paddingLeft: '0', width: '100%', fontSize: '1.1rem'}}>Dive into a world of immersive gaming experiences, where every move is a thrill and every victory is epic.</p>
          </div>
          </div>


      </div>
  )


}