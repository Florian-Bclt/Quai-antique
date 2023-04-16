import React from 'react'
import './Dashboard.css'
import CmsNavbar from './components/cmsNavbar/CmsNavbar'
import { Table } from 'react-bootstrap'
import { HiUserGroup, HiUser, HiOutlineBookOpen, HiBookOpen } from "react-icons/hi";
import {MdOutlineRestaurant} from "react-icons/md";

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
            
            <h1><HiUserGroup /> Personnel</h1>
          </div>
          <div className="card">
            <h1><HiUser />Les Clients</h1>
          </div>
          <div className="card">
            <h1><HiOutlineBookOpen />Menu</h1>
          </div>
          <div className="card">
            <h1><MdOutlineRestaurant />La Carte</h1>
          </div>
          <div className="card">
            <h1><MdOutlineRestaurant />Les Tables</h1>
          </div>
        </div>

        <div className="cards">
          <div className="reservation__card">
          <div className="title">
            <h1>Réservations</h1>
          </div>
          <div className="reservations">
            <h2>liste des dernières réservations:</h2>

            {/* <Table striped border hover size='md' variant='dark'>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th colSpan={3}>Réservation</th>
                  <th>Couverts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dupont</td>
                  <td>Jean-Miche</td>
                  <td colSpan={3}>Lundi 9 juin 12:00</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Doe</td>
                  <td>John</td>
                  <td colSpan={3}>Vendredi 10 juillet 20:00</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>Dupont</td>
                  <td>Jean-Pierre</td>
                  <td colSpan={3}>Lundi 25 décembre 12:15</td>
                  <td>8</td>
                </tr>
              </tbody>
            </Table> */}

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