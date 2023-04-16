import React from 'react'
import './Calendar.css'
import CmsNavbar from '../../components/cmsNavbar/CmsNavbar'

const Calendar = () => {
  return (
    <>
      <CmsNavbar />
      <div className='dashboard'>
        <div className="title">
          <h1>Calendrier</h1>
        </div>
          <h2>Gestion des horaires</h2>
      </div>
    </>
  )
}

export default Calendar