import React from 'react';
import './ReservationForm.css';
import { MdOutlineRestaurantMenu} from 'react-icons/md';
import { BiCalendar } from 'react-icons/bi';
import Navbar from '../../components/Navbar/Navbar';

const ReservationForm = () => {
  return (
    <>
    <Navbar />
    <div className='app__reservation-container'>
      <div className="app__reservation-title p__cormorant">Quai Antique</div>
      <div className="app_reservation-form p__opensans">
        <p>Pour toutes réservations de plus de 10 personnes, merci de contacter directement le restaurant.</p>
        <form action='' method='get' className='covered'>
          <label htmlFor='covered' className='reservation-icon'><MdOutlineRestaurantMenu/></label>
          <select className='reservation-input' name='places'>
            <option value="1">1 couvert</option>
            <option value="2">2 couverts</option>
            <option value="3">3 couverts</option>
            <option value="4">4 couverts</option>
            <option value="5">5 couverts</option>
            <option value="6">6 couverts</option>
            <option value="7">7 couverts</option>
            <option value="8">8 couverts</option>
            <option value="9">9 couverts</option>
            <option value="10">10 couverts</option>
          </select>
          <label id='calendar' htmlFor="date" className='reservation-icon'><BiCalendar /></label>
          <input className='reservation-input' type="date"/>
        </form>
      </div>
        <div className="lunch p__cormorant">
          <h5>Déjeuner</h5>
          <div className='time'>
            <button className='select-time-btn'>12:00</button>
            <button className='select-time-btn'>12:15</button>
            <button className='select-time-btn'>12:30</button>
            <button className='select-time-btn'>12:45</button>
            <button className='select-time-btn'>13:00</button>
            <button className='select-time-btn'>13:15</button>
            <button className='select-time-btn'>13:30</button>
            <button className='select-time-btn'>13:45</button>
            <button className='select-time-btn'>14:00</button>
          </div>
        </div>
        <div className="dinner p__cormorant">
          <h5>Diner</h5>
          <div className='time'>
            <button className='select-time-btn'>19:00</button>
            <button className='select-time-btn'>19:15</button>
            <button className='select-time-btn'>19:30</button>
            <button className='select-time-btn'>19:45</button>
            <button className='select-time-btn'>20:00</button>
            <button className='select-time-btn'>20:15</button>
            <button className='select-time-btn'>20:30</button>
            <button className='select-time-btn'>20:45</button>
            <button className='select-time-btn'>21:00</button>
            <button className='select-time-btn'>21:15</button>
            <button className='select-time-btn'>21:30</button>
            <button className='select-time-btn'>21:45</button>
          </div>
        </div>
    </div>
  </>
  )
}

export default ReservationForm