import React from 'react'
import { Navbar, SubHeading } from '../../components';
import { Link } from 'react-router-dom';
import './Contact.css';
import { useQuery } from '@apollo/client';
import { GET_HOURS } from '../../graphQl/queries';
import {getDayOfWeekName} from '../../dayOfWeek.ts'

function Contact() {
  const {loading, error, data } = useQuery(GET_HOURS);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error}</p>
  return (
    <>
    <Navbar />
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
        <button className='custom__button' style={{ marginTop: '2rem' }}><Link to='/reservation'>Réserver</Link></button>
      </div>
      <div className="app__wrapper_form">
        <form>
          <input type="text" name='name' placeholder='Votre nom et prénom' required />
          <input type="email" name="email" placeholder='Votre Email' required/>
          <textarea name="message" rows="7" placeholder='Votre message' required></textarea>
          <button type='submit' className='custom__button'>Envoyer</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact