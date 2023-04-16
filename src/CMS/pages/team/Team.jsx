import React from 'react'
import './Team.css'
import CmsNavbar from '../../components/cmsNavbar/CmsNavbar'
import { Link } from 'react-router-dom'

const Team = () => {
  return (
    <>
      <CmsNavbar />
      <div className='dashboard'>
        <div className="title">
          <h1>Le Personnel</h1>
        </div>
      <button className='button'><Link to="/add-member">Ajouter un membre</Link></button>
      </div>
    </>
  )
}

export default Team