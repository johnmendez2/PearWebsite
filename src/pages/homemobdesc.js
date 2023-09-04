import '../styles/opaldesc.css'
import { useState,useEffect } from 'react';
import avatar from '../avatar.png'
import girlpearproducts from '../public/girlpearproducts.jpg'
import cloud from '../public/pearcloud(white).png'
import meeting from '../public/meeting.jpg'
import pearOS from '../public/pearOS.png'
import bothdevice from '../public/bothdevice.jpg'
import peartheme from '../public/peartheme.png'
export default function OpalMobDesc(){
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
          
          <div className="desc4k" style={{
  backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/008/934/951/non_2x/smiling-young-woman-using-laptop-sitting-on-couch-at-home-beautiful-girl-shopping-or-chatting-online-in-social-network-having-fun-watching-movie-freelancer-working-on-computer-project-free-photo.JPG")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '30rem',
  position: 'relative',
}}>
  {/* Semi-transparent overlay */}
  <div className="overlay"></div>
  <div className='desc4ktext' style={{ color: 'white', position: 'relative', zIndex: 2 }} data-aos="fade-up">
    <h1 className={`descname`} style={{ fontSize: '50px' }}>Experience the Future, Experience Pear</h1>
    <p className="descpara" style={{ fontSize: '20px' }}>Redefining technology with products that are both powerful and stunning by effectively integrating exceptional performance with a timeless design.</p>
  </div>
</div>


<div className="desc4k" style={{marginTop: '-2%' , background:'white'}} data-aos="fade-up">
          {/* <div className="desc4k" style={{marginTop: '-2%' , background:'linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%)'}}> */}
          <div className='desc4ktext' style={{color:'black',padding: '10px'}}>
          <h1 className={`descname`}>Unmatched reliability</h1>
              <p className="descpara" style={{paddingLeft: '0', width: '100%', fontSize: '1.1rem'}}>With our unwavering dedication to excellence, every product was built to deliver a seamless, reliable and lasting experience.</p>
          </div>
          <div className='headersection' style={{height:'auto'}}>
                  <img src={meeting} alt="Avatar"style={{ width: '90%' }} />
                  </div>
          </div>


          <div className="desc4k" style={{marginTop: '-2%' , background:'white'}} data-aos="fade-up">
          {/* <div className="desc4k" style={{marginTop: '-2%' , background:'linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%)'}}> */}
          <div className='desc4ktext' style={{color:'black',padding: '10px'}}>
          <h1 className={`descname`}>Stunning craftsmanship</h1>
              <p className="descpara" style={{paddingLeft: '0', width: '100%', fontSize: '1.1rem'}}>Each device is a work of stunning craftsmanship, from the sleek contours to the top-of-the line materials used to exude elegance.</p>
          </div>
          <div className='headersection' style={{height:'auto'}}>
                  <img src={bothdevice} alt="Avatar"style={{ width: '90%' }} />
                  </div>
          </div>


          <div className="desc4k" style={{marginTop: '-2%' , background:'black'}}>
          {/* <div className="desc4k" style={{marginTop: '-2%' , background:'linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%)'}}> */}
          <div className='desc4ktext' style={{color:'white',padding: '10px'}} data-aos="fade-up">
          <div className='headersection' style={{height:'auto'}} data-aos="fade-up">
                  <img src={peartheme} alt="Avatar"style={{ width: '90%' }} />
                  </div>
              <p className="descpara" style={{paddingLeft: '0', width: '100%', fontSize: '1.1rem'}}>Our patented pearOS was meticulously designed for our products to provide an unmatched user experience. An impeccable blend of cutting-edge technology and intuitive design to give you the best experience.</p>
          </div>
          </div>

          <div className="desc4k" style={{marginTop: '-2%' , background:'black'}} >
          {/* <div className="desc4k" style={{marginTop: '-2%' , background:'linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%)'}}> */}
          <div className='desc4ktext' style={{color:'white',padding: '10px'}} data-aos="fade-up">
          <div className='headersection' style={{height:'auto'}} data-aos="fade-up">
                  <img src={cloud} alt="Avatar"style={{ width: '90%' }} />
                  </div>
              <p className="descpara" style={{paddingLeft: '0', width: '100%', fontSize: '1.1rem'}}>You never have to worry about storage, with pearCloud all your files can be stored in our servers and can be accessed at any time.</p>
          </div>
          </div>


          <div className="desc4k" style={{marginTop: '-2%' , background:'black'}} >
          {/* <div className="desc4k" style={{marginTop: '-2%' , background:'linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%)'}}> */}
          <div className='desc4ktext' style={{color:'white',padding: '10px'}} data-aos="fade-up">
          <div className='headersection' style={{height:'auto'}} data-aos="fade-up">
                  <img src={pearOS} alt="Avatar"style={{ width: '90%' }} />
                  </div>
              <p className="descpara" style={{paddingLeft: '0', width: '100%', fontSize: '1.1rem'}}>With pearOS all your devices can easily be linked to each other, allowing for hassle free interactions between your devices.</p>
          </div>
          </div>


                        



                        


                        <div className="desc4k" style={{backgroundImage: `url(${girlpearproducts})`, backgroundSize: 'cover', backgroundPosition: 'center', height:'30rem'}} >
                        <div className='desc4ktext' style={{color:'white'}}data-aos="fade-up">
                                    </div>
            </div>

        </div>
    )

}