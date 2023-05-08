import React, {useState, useEffect } from 'react';
import './ReservationForm.css';
import { MdOutlineRestaurantMenu} from 'react-icons/md';
import { BiCalendar } from 'react-icons/bi';
import Navbar from '../../components/Navbar/Navbar';
import { GET_TABLES } from '../../graphQl/queries'
import { useQuery } from '@apollo/client';

const ReservationForm = () => {
  const { loading, error, data } = useQuery(GET_TABLES);
  const [selectedTable, setSelectedTable] = useState(null);

  useEffect(() => {
    if (data && data.tablesPagination && data.tablesPagination.nodes) {
      setSelectedTable(data.tablesPagination.nodes[0].id);
    }
  }, [data]);

  return (
    <>
    <Navbar />
    <div className='app__reservation-container'>
      <div className="app__reservation-title p__cormorant">Quai Antique</div>
      <div className="app_reservation-form p__opensans">
        <p>Pour toutes réservations de plus de 10 personnes, merci de contacter directement le restaurant.</p>
        <form action='' method='get' className='covered'>
          <label htmlFor='table' className='reservation-icon'><MdOutlineRestaurantMenu/></label>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && data.tablesPagination && data.tablesPagination.nodes && (
              <select className='reservation-input' name='table' value={selectedTable} onChange={(e) => selectedTable(e.target.value)}>
                {data.tablesPagination.nodes.map((table) => (
                  <option key={table.id} value={table.id} disabled={!table.available}>
                    {table.title} - {table.places} places {table.available ? '' : '- Indisponible'}
                  </option>
                ))}
              </select>
            )}
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