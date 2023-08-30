import React, { useEffect, useRef, useState } from 'react';
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <div className="navbar">
        <div>
        <a href="/" className='pearlogo'>Pear</a>
        </div>
        <div className='options'>
        <a href="/products/new" className="collection">PearPhone</a>
        <a href="/products" className="collection">PearBook</a>
<a href="/FAQs" className="collection">Learn</a>
        </div>
          
        <div className="hamburgericon" onClick={handleMenuClick}>
          <FontAwesomeIcon color="black" icon={faBars} height={'20px'} />
        </div>

      </div>
      <div className={`menu-container ${menuOpen ? 'open' : ''}`}>
      <a href="/products/new" className="collection">NEW&nbsp;&nbsp;ARRIVALS</a>
      <a href="/products" className="collection">SHOP</a>
<a href="/FAQs" className="faqs">FAQ'S</a>
<a href="/blogs" className="faqs">BLOGS</a>
        </div>
    </div>
  );
}

export default Navbar;
