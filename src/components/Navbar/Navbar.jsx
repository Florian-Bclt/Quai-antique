import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu} from 'react-icons/md';
import { Link } from 'react-router-dom';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.quaiLogo} alt='app logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='/'>Accueil</a></li>
        <li className='p__opensans'><a href='/menu'>Menu</a></li>
        <li className='p__opensans'><a href='#about'>A propos</a></li>
        <li className='p__opensans'><a href='#menu'>La Carte</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href='/' className='p__opensans'>Réserver</a>
        <div />
        <Link to="/login" className='p__opensans'>Se connecter</Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href='#home'>Accueil</a></li>
              <li className='p__opensans'><a href='#about'>A propos</a></li>
              <li className='p__opensans'><a href='/menu'>Menu</a></li>
              <li className='p__opensans'><a href='#awards'>La carte</a></li>
              <li className='p__opensans'><a href='#contact'>Contact</a></li>
            </ul>
          </div>

        )}
      </div>
    </nav>
  );
};

export default Navbar;
