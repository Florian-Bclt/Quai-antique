import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';
import { useQuery } from '@apollo/client';
import { GET_HOURS } from '../../graphQl/queries';

const Footer = () => { 
  const {loading, error, data } = useQuery(GET_HOURS);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error}</p>

  return (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className='app__footer-headtext'>Nous Contacter</h1>
          <a className='p__opensans' href='https://goo.gl/maps/fZxKDHXqYttqCBne9'>Avenue des chevaliers tireurs, 73000 Chambéry</a>
          <p className="p__opensans">+33 XX XX XX XX</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.quaiLogo} alt="footer_logo" />
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
            {data.openingHours.map((hour) => (
              <p className='p__opensans' key={hour.id} style={{ fontSize: '0.8em'}}>
                <span style={{ color: 'var(--color-golden)' }}>{hour.dayOfWeek}{" : "}</span>
                {hour.isClosed ? "Fermé" : `${hour.lunchOpeningTime} - ${hour.lunchClosingTime} / ${hour.dinnerOpeningTime} - ${hour.dinnerClosingTime}`}
              </p>
            ))}
        </div>
      </div>
      <div className="footer__copyright">
        <p className='p__opensans'>2023 Quai Antique. Site créé par <a href='https://boucletflorian.netlify.app/' target='_blank'>Bouclet Florian</a>. Tous droits réservés.</p>
      </div>
    </div>
  );
}
export default Footer;
