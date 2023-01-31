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
        <li className='p__opensans'><Link to='/'>Accueil</Link></li>
        <li className='p__opensans'><Link to='/menu'>Menu</Link></li>
        <li className='p__opensans'><Link to='/cart'>La Carte</Link></li>
        <li className='p__opensans'><Link to='/contact'>Contact</Link></li>
      </ul>
      <div className="app__navbar-login">
        <Link to='/' className='p__opensans'>Réserver</Link>
        <div />
        <Link to="/login" className='p__opensans'>Se connecter</Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><Link to='/'>Accueil</Link></li>
              <li className='p__opensans'><Link to='/menu'>Menu</Link></li>
              <li className='p__opensans'><Link to='/cart'>La Carte</Link></li>
              <li className='p__opensans'><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>

        )}
      </div>
    </nav>
  );
};

export default Navbar;
