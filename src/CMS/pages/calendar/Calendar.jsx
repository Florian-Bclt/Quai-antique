import React, { useState } from 'react'
import CmsNavbar from '../../components/cmsNavbar/CmsNavbar'
import { useQuery, useMutation } from '@apollo/client'
import { GET_HOURS } from '../../../graphQl/queries'
import EditButton from '../../components/Buttons/EditButton'
import {getDayOfWeekName} from '../../../dayOfWeek.ts'
import { HOUR_UPDATE } from '../../../graphQl/mutations'


const Calendar = () => {
  const {loading, error, data } = useQuery(GET_HOURS);
  const [hourUpdate] = useMutation(HOUR_UPDATE, {
    refetchQueries: [{ query: GET_HOURS}],
  });
  const [message, setMessage] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedHourId, setSelectedHourId] = useState(null);
  const [dayOfWeek, setDayOfWeek] = useState(0);
  const [isClosed, setIsClosed] = useState(false);
  const [lunchOpeningTime, setLunchOpeningTime] = useState('');
  const [lunchClosingTime, setLunchClosingTime] = useState('');
  const [dinnerOpeningTime, setDinnerOpeningTime] = useState('');
  const [dinnerClosingTime, setDinnerClosingTime] = useState('');

  const handleUpdate = async (hourId) => {
    setShowConfirmationModal(true);
    setSelectedHourId(hourId);
  };

  const confirmUpdate = async (hourId) => {
    try {
      await hourUpdate({
        variables: {
          id: hourId,
          input: {
            dayOfWeek: dayOfWeek,
            isClosed: isClosed,
            lunchOpeningTime: lunchOpeningTime,
            lunchClosingTime: lunchClosingTime,
            dinnerOpeningTime: dinnerOpeningTime,
            dinnerClosingTime: dinnerClosingTime
          }
        }});
      // Afficher un message de confirmation
      setMessage("L'horaire a été modifier avec succès.");
      setShowConfirmationModal(false);
    } catch (error) {
      // Afficher un message d'erreur
      setMessage("Une erreur s'est produite lors de la modification");
      console.log(error.graphQLErrors);
    }
  }
  

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error}</p>

  return (
    <>
      <CmsNavbar />
      <div className='dashboard'>
        <div className="title">
          <h1>Horaires</h1>
        </div>
        {message && (
          <p className={message.includes('succès') ? 'success-message' : 'error-message'}>
            {message}
          </p>
        )}
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
            {data.openingHours.map((hour) => (
              <tr key={hour.id}>
                <td>{getDayOfWeekName(hour.dayOfWeek)}</td>
                <td>{hour.isClosed ? 'Fermé' : 'Ouvert'}</td>
                <td>{hour.lunchOpeningTime}</td>
                <td>{hour.lunchClosingTime}</td>
                <td>{hour.dinnerOpeningTime}</td>
                <td>{hour.dinnerClosingTime}</td>
                <td className='action__column'>
                  <EditButton onClick={() => handleUpdate(hour.id)}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

{/* MODAL de modification d'horaire */}
      {showConfirmationModal && (
        <div className="confirmation-modal">
          <div className="confirmation-modal-content">
            <h2>Modifier un horaire</h2>
            <form onSubmit={(event) => { event.preventDefault(); confirmUpdate(selectedHourId)}}>
              <div>
              <select name="dayOfWeek" value={dayOfWeek} onChange={(e) => setDayOfWeek(Number(e.target.value))}>
                <option value={1}>Lundi</option>
                <option value={2}>Mardi</option>
                <option value={3}>Mercredi</option>
                <option value={4}>Jeudi</option>
                <option value={5}>Vendredi</option>
                <option value={6}>Samedi</option>
                <option value={7}>Dimanche</option>
              </select>
              </div>
              <div>
                <label htmlFor="isClosed">Status:</label>
                <select name='isClosed' value={isClosed} onChange={(e) => setIsClosed(e.target.value)}>
                  <option value={true}>Ouvert</option>
                  <option value={false}>Fermé</option>
              </select>
              </div>
              <div>
                <label htmlFor="lunchOpeningTime">Ouverture Déjeuner:</label>
                <input
                  type="time"
                  id="lunchOpeningTime"
                  name="lunchOpeningTime"
                  value={lunchOpeningTime}
                  onChange={(e) => setLunchOpeningTime(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="lunchClosingTime">Fermeture Déjeuner:</label>
                <input
                  type="time"
                  id="lunchClosingTime"
                  name="lunchClosingTime"
                  value={lunchClosingTime}
                  onChange={(e) => setLunchClosingTime(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="dinnerOpeningTime">Ouverture Diner:</label>
                <input
                  type="time"
                  id="dinnerOpeningTime"
                  name="dinnerOpeningTime"
                  value={dinnerOpeningTime}
                  onChange={(e) => setDinnerOpeningTime(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="dinnerClosingTime">Fermeture Diner:</label>
                <input
                  type="time"
                  id="dinnerClosingTime"
                  name="dinnerClosingTime"
                  value={dinnerClosingTime}
                  onChange={(e) => setDinnerClosingTime(e.target.value)}
                />
              </div>
              <div className="buttons">
                <button type="submit" className="confirm-btn">Modifier</button>
                <button type="button" className="cancel-btn" onClick={() => setShowConfirmationModal(false)}>Annuler</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Calendar