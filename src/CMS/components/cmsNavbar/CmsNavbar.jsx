import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu} from 'react-icons/md';
import { Link } from 'react-router-dom';
import {MdLogout} from 'react-icons/md'

const CmsNavbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><Link to='/dashboard'>Accueil</Link></li>
        <li className='p__opensans'><Link to='/team'>Personnel</Link></li>
        <li className='p__opensans'><Link to='/clients'>Clients</Link></li>
        <li className='p__opensans'><Link to='/edit-menu'>Menu</Link></li>
        <li className='p__opensans'><Link to='/edit-cart'>La Carte</Link></li>
        <li className='p__opensans'><Link to='/tables'>Tables</Link></li>
        <li className='p__opensans'><Link to='/calendar'>Calendrier</Link></li>
      </ul>
      <div className="app__navbar-logout">
        <Link to="/login" className='p__opensans'><MdLogout /></Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><Link to='/dashboard'>Accueil</Link></li>
              <li className='p__opensans'><Link to='/team'>Personnel</Link></li>
              <li className='p__opensans'><Link to='/clients'>Clients</Link></li>
              <li className='p__opensans'><Link to='/edit-menu'>Menu</Link></li>
              <li className='p__opensans'><Link to='/edit-cart'>La Carte</Link></li>
              <li className='p__opensans'><Link to='/tables'>Tables</Link></li>
              <li className='p__opensans'><Link to='/calendar'>Calendrier</Link></li>
            </ul>
          </div>

        )}
      </div>
    </nav>
  );
};

export default CmsNavbar;