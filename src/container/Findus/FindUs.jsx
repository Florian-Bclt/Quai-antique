import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import { Link } from 'react-router-dom';
import { GET_HOURS } from '../../graphQl/queries';
import { useQuery } from '@apollo/client';
import {getDayOfWeekName} from '../../dayOfWeek.ts'

const FindUs = () => {
  const {loading, error, data } = useQuery(GET_HOURS);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error}</p>

  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>
      <div className="app__wrapper_info">
        <SubHeading  title='Contact'/>
        <h1 className='headtext__cormorant' style={{ marginBottom : '3rem'}}>Nous trouver</h1>
        <div className="app__wrapper-content">
            <p className='p__opensans'>Situé au centre ville, retrouvez nous à l'adresse :</p>
            <a className='p__opensans' href='https://goo.gl/maps/fZxKDHXqYttqCBne9'>Avenue des chevaliers tireurs, 73000 Chambéry</a>
            <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0'}}>Horaires</p>

            {data.openingHours.map((hour) => (
              <p className='p__opensans' key={hour.id}>
                <span style={{ color: 'var(--color-golden)' }}>{getDayOfWeekName(hour.dayOfWeek)}{" : "}</span>
                {hour.isClosed ? "Fermé" : `${hour.lunchOpeningTime.slice(0, 5)} - ${hour.lunchClosingTime.slice(0, 5)} / ${hour.dinnerOpeningTime.slice(0, 5)} - ${hour.dinnerClosingTime.slice(0, 5)}`}
              </p>
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
} 


export default FindUs;
