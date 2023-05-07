import React from 'react'
import './Dashboard.css'
import CmsNavbar from './components/cmsNavbar/CmsNavbar'
import { Table } from 'react-bootstrap'
import { HiUserGroup, HiUser, HiOutlineBookOpen } from "react-icons/hi";
import {MdOutlineRestaurant} from "react-icons/md";
import { Link } from 'react-router-dom';


const Dashboard = () => {
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
              <h2>liste des dernières réservations:</h2>
  
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <th key={index}>Nom</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <td key={index}>Table cell {index}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>2</td>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <td key={index}>Table cell {index}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>3</td>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <td key={index}>Table cell {index}</td>
                    ))}
                  </tr>
                </tbody>
              </Table>
            </div>
            </div>
          </div>
        </section>
      </>
    )

}

export default Dashboard