import React, { useState, useContext, useEffect} from 'react';
import './Dashboard.css'
import CmsNavbar from './components/cmsNavbar/CmsNavbar'
import { HiUserGroup, HiUser, HiOutlineBookOpen } from "react-icons/hi";
import {MdOutlineRestaurant} from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import GetReservations from './components/GetReservations/GetReservations';
import { AppContext } from '../apollo';


const Dashboard = () => {
   const { role } = useContext(AppContext)
   const [authenticated, setAuthenticated] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      navigate('login', { replace: true });
      return;
    }
    setAuthenticated(true);
   }, [navigate]);

   if(!authenticated) {
    return null;
   }
    return (
      <>
        <CmsNavbar />
        <section className='dashboard'>
          <div className="title">
            <h1>Tableau de bord</h1>
          </div>
          <div className="cards">
            <div className="card">
              <Link to='team'><h1><HiUserGroup />Personnel</h1></Link>
            </div>
            <div className="card">
              <Link to='clients'><h1><HiUser />Les Clients</h1></Link>
            </div>
            <div className="card">
              <Link to='edit-menu'><h1><HiOutlineBookOpen />Menu</h1></Link>
            </div>
            <div className="card">
              <Link to='edit-cart'><h1><MdOutlineRestaurant />La Carte</h1></Link>
            </div>
            <div className="card">
              <Link to='tables'><h1><MdOutlineRestaurant />Les Tables</h1></Link>
            </div>
          </div>
  
          <div className="cards">
            <div className="reservation__card">
            <div className="title">
              <h1>Réservations</h1>
            </div>
            <div className="reservations">
              <GetReservations />
            </div>
            </div>
          </div>
        </section>
      </>
    )

}

export default Dashboard