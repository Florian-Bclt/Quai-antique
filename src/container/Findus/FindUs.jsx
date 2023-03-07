import React from 'react';
import { images, data } from '../../constants';
import { SubHeading } from '../../components';
import { Link } from 'react-router-dom';


const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
      <SubHeading  title='Contact'/>
      <h1 className='headtext__cormorant' style={{ marginBottom : '3rem'}}>Nous trouver</h1>
      <div className="app__wrapper-content">
          <p className='p__opensans'>Situé au centre ville, retrouvez nous à l'adresse :</p>
          <a className='p__opensans' href='https://goo.gl/maps/fZxKDHXqYttqCBne9'>Avenue des chevaliers tireurs, 73000 Chambéry</a>
          <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0'}}>Horaires</p>          
          {data.hours.map((hour) => (
              <p className='p__opensans'>{hour.day} {hour.hour}</p> 
            ))}
      </div>
      <button 
        className='custom__button'
        style={{ marginTop: '2rem' }}
      >
        <Link to='/reservation' 
          style={{ color: 'unset'}}
        >
          Réserver
        </Link>
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
