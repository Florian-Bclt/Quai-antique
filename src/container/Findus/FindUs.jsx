import React from 'react';
import { images, data, hours } from '../../constants';
import { SubHeading } from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
      <SubHeading  title='Contact'/>
      <h1 className='headtext__cormorant' style={{ marginBottom : '3rem'}}>Find Us</h1>
      <div className="app__wrapper-content">
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur commodi perspiciatis magni minima voluptate ab mollitia quod.</p>
          <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0'}}>Horaires</p>          
          {data.hours.map((hour) => (
              <p className='p__opensans'>{hour.day} {hour.hour}</p> 
            ))}
      </div>
      <button className='custom__button' style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
