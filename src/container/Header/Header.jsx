import React from 'react';
import { Link } from 'react-router-dom';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title='Découvrez de nouvelles saveurs' />
      <h1 className='app__header-h1'>La clé d'un restaurant</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Savourez les plaisirs simples de la vie en famille, autour d'un plat authentique et régional confectionné par nos meilleurs cuisiniers.</p>
      <button type='button' className='custom__button'><Link to='/menu'>Découvrir les menus</Link></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt='header img' />
    </div>
  </div>
);

export default Header;
