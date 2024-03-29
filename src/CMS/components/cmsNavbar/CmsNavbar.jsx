import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu} from 'react-icons/md';
import { Link } from 'react-router-dom';
import {MdLogout} from 'react-icons/md'

const CmsNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <nav className='app__navbar'>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><Link to='/dashboard'>Accueil</Link></li>
        <li className='p__opensans'><Link to='/dashboard/team'>Personnel</Link></li>
        <li className='p__opensans'><Link to='/dashboard/clients'>Clients</Link></li>
        <li className='p__opensans'><Link to='/dashboard/edit-menu'>Menu</Link></li>
        <li className='p__opensans'><Link to='/dashboard/edit-cart'>La Carte</Link></li>
        <li className='p__opensans'><Link to='/dashboard/tables'>Tables</Link></li>
        <li className='p__opensans'><Link to='/dashboard/calendar'>Horaires</Link></li>
      </ul>
      <button onClick={logout} className='app__navbar-logout p__opensans' 
        style={{
          backgroundColor: 'transparent', 
          border: 'none', 
          fontSize: '1.5em', 
          cursor: 'pointer' }}
        >
          <MdLogout/>
        </button>
        
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><Link to='/dashboard'>Accueil</Link></li>
              <li className='p__opensans'><Link to='/dashboard/team'>Personnel</Link></li>
              <li className='p__opensans'><Link to='/dashboard/clients'>Clients</Link></li>
              <li className='p__opensans'><Link to='/dashboard/edit-menu'>Menu</Link></li>
              <li className='p__opensans'><Link to='/dashboard/edit-cart'>La Carte</Link></li>
              <li className='p__opensans'><Link to='/dashboard/tables'>Tables</Link></li>
              <li className='p__opensans'><Link to='/dashboard/calendar'>Horaires</Link></li>
            </ul>
          </div>

        )}
      </div>
    </nav>
  );
};

export default CmsNavbar;