import React from 'react'
import CmsNavbar from '../../components/cmsNavbar/CmsNavbar'
import { useQuery } from '@apollo/client'
import { GET_HOURS } from '../../../graphQl/queries'
import EditButton from '../../components/Buttons/EditButton'
import DeleteButton from '../../components/Buttons/DeleteButton'

const Calendar = () => {
  const {loading, error, data } = useQuery(GET_HOURS);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error}</p>

  return (
    <>
      <CmsNavbar />
      <div className='dashboard'>
        <div className="title">
          <h1>Horaires</h1>
        </div>

        <table>
          <thead>
            <tr>
              <th>Jour</th>
              <th>Status</th>
              <th>Ouverture déjeuner</th>
              <th>Fermeture déjeuner</th>
              <th>Ouverture diner</th>
              <th>Fermeture diner</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.openingHours.map(({ id, dayOfWeek, isClosed, lunchOpeningTime, lunchClosingTime, dinnerOpeningTime, dinnerClosingTime }) => (
              <tr key={id}>
                <td>{dayOfWeek}</td>
                <td>{isClosed ? 'Fermé' : 'Ouvert'}</td>
                <td>{lunchOpeningTime.slice(0, 5)}</td>
                <td>{lunchClosingTime.slice(0, 5)}</td>
                <td>{dinnerOpeningTime.slice(0, 5)}</td>
                <td>{dinnerClosingTime.slice(0, 5)}</td>
                <td className='action__column'>
                  <EditButton to={`/dashboard/edit-hour/${id}`}/>
                  <DeleteButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Calendar