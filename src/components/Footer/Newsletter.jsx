import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className="app__newsletter-heading">
      <SubHeading  title='Newsletter'/>
      <h1 className='headtext__cormorant'>S'abonner à Notre Newsletter</h1>
      <p className='p__opensans'>Ne manquez jamais nos nouveautés !</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder='Entrez votre adresse mail'/>
      <button className='custom__button'>S'inscrire</button>
    </div>
  </div>
);

export default Newsletter;
