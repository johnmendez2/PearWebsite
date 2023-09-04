import Aos from 'aos';
import '../styles/opaldesc.css'
import { useState, useEffect } from 'react';
import holdingphone from '../public/front-view-hand-holding-smartphone.jpg'
import camerashot from '../public/camerashot.jpg'
import gaming from '../public/gaming.jpg'
import cameraspecs from '../public/cameraspecs.jpg'
import elegance from '../public/elegance.jpg'
import pearos from '../public/pearOS.svg'

export default function PrismDesc() {
  useEffect(() => {
    Aos.init({
      duration: 800 // Set the default duration for all animations to 800ms (0.8 seconds)
    });
  }, []);

  return (
    <div>
      {/* Elegance Section */}
      <div className="lastsection" style={{ backgroundColor: 'white', paddingBottom: '200px', paddingTop: '100px' }}>
        <div className="text-section" style={{ color: 'black', marginLeft: '20rem' }} data-aos="fade-up">
          <h1 className='descname'>Elegant Design</h1>
          <p className='futurepara'>Experience the epitome of elegance with our meticulously designed device, crafted to perfection.</p>
        </div>
        <div className="futureimage-section" data-aos="fade-up">
          <img src={holdingphone} alt="Elegant Design" style={{ width: '500px', marginRight: '20rem', textAlign: 'center' }} />
        </div>
      </div>

      {/* Operating System Section */}
      <div className="futuresection" style={{ backgroundColor: 'white', paddingBottom: '100px' }}>
        <div className="futureimage-section" data-aos="fade-up" >
          <img src={pearos} alt="Operating System" style={{ width: '500px', marginLeft: '300px', paddingRight: '20rem' }} data-aos="fade-up" />
        </div>
        <div className="futuretext-section" style={{ color: 'black', marginRight: '2rem' }} data-aos="fade-up">
          <h1 className='descname' style={{}}>Operating System</h1>
          <p className='futurepara'>Harness the power of our advanced operating system, offering a seamless and intuitive user experience.</p>
        </div>
      </div>

      {/* Elegance 4K Section */}
      <div className="desc4k" style={{ backgroundImage: `url(${elegance})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingBottom: '35%' }} data-aos="fade-up">
        <div className='desc4ktext' style={{ color: 'white' }} data-aos="fade-up">
        </div>
      </div>

      {/* Professional Camera Quality Section */}
      <div className="lastsection" style={{ backgroundColor: 'white', paddingBottom: '200px', paddingTop: '100px' }}>
        <div className="text-section" style={{ color: 'black', marginLeft: '20rem' }} data-aos="fade-up">
          <h1 className='descname'>Camera Quality</h1>
          <p className='futurepara'>Capture the world with professional-grade camera technology, delivering stunning results with every shot.</p>
        </div>
        <div className="futureimage-section" data-aos="fade-up">
          <img src={cameraspecs} alt="Professional Camera Quality" style={{ width: '500px', marginRight: '20rem', textAlign: 'center' }} />
        </div>
      </div>

      {/* Studio Editing Section */}
      <div className="futuresection" style={{ backgroundColor: 'white', paddingBottom: '100px' }}>
        <div className="futureimage-section" data-aos="fade-up" >
          <img src={camerashot} alt="Studio Editing" style={{ width: '500px', marginLeft: '300px', paddingRight: '20rem' }} data-aos="fade-up" />
        </div>
        <div className="futuretext-section" style={{ color: 'black', marginRight: '2rem' }} data-aos="fade-up">
          <h1 className='descname' style={{}}>Studio Editing</h1>
          <p className='futurepara'>Unleash your creativity with studio-grade editing capabilities, making every project a masterpiece.</p>
        </div>
      </div>

      {/* Gaming Section */}
      <div className="lastsection" style={{ backgroundColor: 'white', paddingBottom: '200px', paddingTop: '100px' }}>
        <div className="text-section" style={{ color: 'black', marginLeft: '20rem' }} data-aos="fade-up">
          <h1 className='descname'>Immersive Gaming</h1>
          <p className='futurepara'>Dive into a world of immersive gaming experiences, where every move is a thrill and every victory is epic.</p>
        </div>
        <div className="futureimage-section" data-aos="fade-up">
          <img src={gaming} alt="Immersive Gaming" style={{ width: '500px', marginRight: '20rem', textAlign: 'center' }} />
        </div>
      </div>
    </div>
  );
}
