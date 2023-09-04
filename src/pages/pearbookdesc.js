import Aos from 'aos';
import '../styles/opaldesc.css';
import { useEffect } from 'react';
import processor from '../public/processor.jpg';
import dolby from '../public/dolby.jpg';
import sleekdesign from '../public/sleekdesign.jpg';
import preview from '../public/preview.jpg';
import usingpearbook from '../public/usingpearbook.jpg';
import pearos from '../public/pearOS.svg';

export default function Pearbookdesc() {
  useEffect(() => {
    Aos.init({
      duration: 800, // Set the default duration for all animations to 800ms
    });
  }, []);

  return (
    <div>
      {/* Sleek Design Section */}
      <div
        className="lastsection"
        style={{ backgroundColor: 'white', paddingBottom: '200px', paddingTop: '400px' }}
      >
        <div className="text-section" style={{ color: 'black', marginLeft: '20rem' }} data-aos="fade-up">
          <h1 className='descname'>Sleek Design</h1>
          <p className='futurepara'>
            Experience a modern and elegant design that combines style with functionality.
          </p>
        </div>
        <div className="futureimage-section" data-aos="fade-up">
          <img src={sleekdesign} alt="Sleek Design" style={{ width: '500px', marginRight: '20rem', textAlign: 'center' }} />
        </div>
      </div>

      {/* 14" Display Section */}
      <div className="futuresection" style={{ backgroundColor: 'white', paddingBottom: '100px' }}>
        <div className="futureimage-section" data-aos="fade-up">
          <img src={preview} alt="14-inch Display" style={{ width: '500px', marginLeft: '300px', paddingRight: '20rem' }} data-aos="fade-up" />
        </div>
        <div className="futuretext-section" style={{ color: 'black', marginRight: '2rem' }} data-aos="fade-up">
          <h1 className='descname' style={{}}>14" Display</h1>
          <p className='futurepara'>
            Enjoy a vibrant 14-inch display that brings your content to life.
          </p>
        </div>
      </div>

      {/* Operating System Section */}
      <div className="lastsection" style={{ backgroundColor: 'white', paddingBottom: '200px', paddingTop: '100px' }}>
        <div className="text-section" style={{ color: 'black', marginLeft: '20rem' }} data-aos="fade-up">
          <h1 className='descname'>Operating System</h1>
          <p className='futurepara'>
            Powered by PearOS, our customized operating system for seamless performance.
          </p>
        </div>
        <div className="futureimage-section" data-aos="fade-up">
          <img src={pearos} alt="Operating System" style={{ width: '500px', marginRight: '20rem', textAlign: 'center' }} />
        </div>
      </div>

      {/* Dolby Atmos Section */}
      <div className="desc4k" style={{ backgroundImage: `url(${usingpearbook})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingBottom: '35%' }} data-aos="fade-up">
        <div className='desc4ktext' style={{ color: 'white' }} data-aos="fade-up">
        </div>
      </div>
      <div className="futuresection" style={{ backgroundColor: 'black', paddingBottom: '100px', paddingTop: '200px' }}>
        <div className="futureimage-section" data-aos="fade-up">
          <img src={dolby} alt="Dolby Atmos" style={{ width: '500px', marginLeft: '300px', paddingRight: '20rem' }} data-aos="fade-up" />
        </div>
        <div className="futuretext-section" style={{ color: 'white', marginRight: '2rem' }} data-aos="fade-up">
          <h1 className='descname' style={{}}>Immersive audio</h1>
          <p className='futurepara'>
            Immerse yourself in high-quality audio with Dolby Atmos sound technology.
          </p>
        </div>
      </div>

      {/* AMD Ryzen 7 Section */}
      <div className="lastsection" style={{ backgroundColor: 'black', paddingBottom: '200px', paddingTop: '100px' }}>
        <div className="text-section" style={{ color: 'white', marginLeft: '20rem' }} data-aos="fade-up">
          <h1 className='descname'>Unlimited power</h1>
          <p className='futurepara'>
            Powered by an AMD Ryzen 7 processor for exceptional performance and efficiency.
          </p>
        </div>
        <div className="futureimage-section" data-aos="fade-up">
          <img src={processor} alt="AMD Ryzen 7" style={{ width: '500px', marginRight: '20rem', textAlign: 'center' }} />
        </div>
      </div>
    </div>
  );
}
