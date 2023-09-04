import '../styles/opaldesc.css'
import { useState,useEffect } from 'react';
import AOS from 'aos';
import cloud from '../public/pearcloud(white).png'
import meeting from '../public/meeting.jpg'
import pearOS from '../public/pearOS.png'
import bothdevice from '../public/bothdevice.jpg'
import peartheme from '../public/peartheme.png'
import 'aos/dist/aos.css';
export default function HomeDesc(){
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
        AOS.init({
          duration: 800 // Set the default duration for all animations to 1000ms (1 second)
        });
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
          
          <div className="desc4k" style={{backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/008/934/951/non_2x/smiling-young-woman-using-laptop-sitting-on-couch-at-home-beautiful-girl-shopping-or-chatting-online-in-social-network-having-fun-watching-movie-freelancer-working-on-computer-project-free-photo.JPG")', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative'}} >
  {/* Add a semi-transparent overlay */}
  <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}></div>
  <div className='desc4ktext' style={{color:'white', position: 'relative', zIndex: 1}} data-aos="fade-up">
    <h1 className={`descname`}>Experience the Future, Experience Pear</h1>
    <p className="descpara">Redefinining technology with products that are <br/>both powerful and stunning by effectively integrating exceptional performance <br/> with a timeless design.</p>
  </div>
</div>



          
      

                        <div className="lastsection" style={{backgroundColor:'white', paddingBottom:'200px', paddingTop:'100px'}}>
            <div className="text-section" style={{color: 'black', marginLeft:'20rem'}}data-aos="fade-up">
                    <h1 className='descname'>Unmatched reliability</h1>
                    <p className='futurepara'>With our unwavering dedication to excellence, every product was built to deliver a seamless, reliable and lasting experience.</p>
                </div>
            <div className="futureimage-section"data-aos="fade-up">
            <img src={meeting} alt="Avatar" style={{ width: '500px', marginRight: '20rem', textAlign: 'center' }} />                          </div>
                        </div>


            <div className="futuresection" style={{backgroundColor:'white', paddingBottom:'100px'}}>
            <div className="futureimage-section"data-aos="fade-up" >
            <img src={bothdevice} alt="Avatar" style={{ width: '500px', marginLeft: '300px', paddingRight:'20rem' }} data-aos="fade-up" />                 </div>
                <div className="futuretext-section" style={{color: 'black', marginRight:'2rem'}}data-aos="fade-up">
                    <h1 className='descname' style={{}}>Stunning craftsmanship</h1>
                    <p className='futurepara'>Each device is a work of stunning craftsmanship, from the sleek contours to the top-of-the line materials used to exude elegance.</p>
                                </div>       
                        </div>



                        <div className="lastsection" style={{backgroundColor:'black', paddingBottom:'200px', paddingTop:'100px'}}>
            <div className="text-section" style={{color: 'white', marginLeft:'20rem'}}data-aos="fade-up">
                    <h1 className='descname'>Bespoke visuals</h1>
                    <p className='futurepara'>Our patented pearOS was meticulously designed for our products to provide an unmatched user experience. An impeccable blend of cutting-edge technology and intuitive design to give you the best experience.</p>
                </div>
            <div className="futureimage-section"data-aos="fade-up">
            <img src={peartheme} alt="Avatar" style={{ width: '500px', marginRight: '20rem', textAlign: 'center' }} />                          </div>
                        </div>


            <div className="futuresection" style={{backgroundColor:'black', paddingBottom:'100px'}}>
            <div className="futureimage-section"data-aos="fade-up" >
            <img src={cloud} alt="Avatar" style={{ width: '500px', marginLeft: '300px', paddingRight:'20rem' }} data-aos="fade-up" />                 </div>
                <div className="futuretext-section" style={{color: 'white', marginRight:'2rem'}}data-aos="fade-up">
                    <h1 className='descname' style={{}}>Cloud storage</h1>
                    <p className='futurepara'>You never have to worry about storage, with pearCloud all your files can be stored in our servers and can be accessed at any time.</p>
                                </div>       
                        </div>

            
                        <div className="lastsection" style={{backgroundColor:'black', paddingBottom:'200px', paddingTop:'100px'}}>
            <div className="text-section" style={{color: 'white', marginLeft:'20rem'}}data-aos="fade-up">
                    <h1 className='descname'>Seamless connectivity</h1>
                    <p className='futurepara'>With pearOS all your devices can easily be linked to each other, allowing for hassle free interactions between your devices.</p>
                </div>
            <div className="futureimage-section"data-aos="fade-up">
            <img src={pearOS} alt="Avatar" style={{ width: '500px', marginRight: '20rem', textAlign: 'center' }} />                          </div>
                        </div>
          



        </div>
    )

}