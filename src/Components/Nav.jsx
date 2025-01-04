import React, { useState } from 'react';
import '../Components/css/nav.css';
import { Link } from 'react-router-dom';





const Nav = () => {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
  return (
    <>
    <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Movie App
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li> 
        </ul>
      </nav>
    
    </>
  );
};

export default Nav;
