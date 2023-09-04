import React, { useEffect, useRef, useState } from 'react';
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import pearlogo from '../public/pearlogo.png'
import pearlogowhite from '../public/pear(white).png'
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollingUp(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);
  const location = useLocation();
  const isHomeScreen = location.pathname === '/'; // Define the home screen route
  const [isHover, setIsHover] = useState(true); // Set this state based on whether you're on the home screen or not

  return (
    <div>
      <div className={`navbar-container ${isHomeScreen ? 'home-navbar' : ''}`}>
      <div className="navbar">
      <div className="logo-container">
          <Link to='/'>
          <img
                className="pearlogo"
                src={isHomeScreen ? pearlogo : pearlogo}
                alt="pear logo"
                onMouseEnter={() => setIsHover(true)} // Set isHomeScreen to true on hover
                onMouseLeave={() => setIsHover(false)} // Set isHomeScreen to false on hover out
              ></img>
          </Link>
        </div>
        
        <div className={`options`}>
        <a href="/products/pearphone" className="collection">PearPhone</a>
        <a href="/products/pearbook" className="collection">PearBook</a>
        </div>
          
        <div className="hamburgericon" onClick={handleMenuClick}>
          <FontAwesomeIcon color="black" icon={faBars} height={'20px'} />
        </div>

      </div>
      <div className={`menu-container ${menuOpen ? 'open' : ''}`}>
      <a href="/products/pearphone" className="collection">PearPhone</a>
        <a href="/products/pearbook" className="collection">PearBook</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
