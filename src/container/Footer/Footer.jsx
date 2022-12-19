import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images, data } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className='app__footer-headtext'>Nous Contacter</h1>
        <p className="p__opensans">adresse</p>
        <p className="p__opensans">phone number</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">"Le meilleur moyen de se retrouver est de se perdre au service des autres."</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className='app__footer-headtext'>Nos Horaires</h1>
        {data.hours.map((hour) => (
                <p className='p__opensans'>{hour.day} {hour.hour}</p> 
              ))}
      </div>
    </div>
    <div className="footer__copyright">
      <p className='p__opensans'>2023 Quai Antique. Site créé par <a href='https://boucletflorian.netlify.app/'>Bouclet Florian</a>. Tous droits réservés.</p>
    </div>
  </div>
);

export default Footer;
