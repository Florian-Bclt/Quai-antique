import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';
import { Link } from 'react-router-dom';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.Q} alt='g letter'/>
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>A propos</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>Comme un retour à l'essentiel, le restaurant Quai Antique vous invite à savourer une cuisine gourmande et authentique. le chef <b>Arnaud Michant</b>, a fait le choix d'ouvrir son troisième restaurant au coeur de la savoie. Il en ressort un moment de partage chaleureux et d'échange avec une maison conviviale à Chambéry.</p>
        <button type='button' className='custom__button'><Link to='/contact'>En savoir plus</Link></button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt='about_knife' />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Notre histoire</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>Le chef étoilé <b>Arnaud Michant</b> et ses équipes signe d'un savoir-faire qui le caratérise et dont le but est vous proposer une cuisine actuelle, pleine de sensations tout en restant gourmande. dans une atmosphère contemporaine, confortable et décontractée, nous vous souhaitons des moments inoubliables.</p>
        <button type='button' className='custom__button'><Link to='/contact'>En savoir plus</Link></button>
      </div>
    </div>
  </div>
);

export default AboutUs;
