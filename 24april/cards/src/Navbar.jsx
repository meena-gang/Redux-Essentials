import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import React from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
       <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    <ul className={isMenuOpen ? 'navbar-nav active' : 'navbar-nav'}>
      <li className="nav-item"><Link to="/"><FontAwesomeIcon icon={faHouse}/>Home</Link></li> 
      <li className="nav-item"><Link to="/gallery"><FontAwesomeIcon icon={faImage} />Gallery</Link></li>
      <li className="nav-item"><Link to="/contact"><FontAwesomeIcon icon={faAddressBook} />Contact</Link></li>
      <li className="nav-item"><Link to="/about"><FontAwesomeIcon icon={faCircleInfo} />About</Link></li>
    </ul>
   
    </nav>
  )
}

export default Navbar
