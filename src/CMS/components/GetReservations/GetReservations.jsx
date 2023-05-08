import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_RESERVATIONS_BY_DAY } from '../../../graphQl/queries';


function GetReservations({ date }) {
  const formattedDate = date ? date.toISOString().slice(0, 10) : '';
  const { loading, error, data } = useQuery(GET_RESERVATIONS_BY_DAY, {
    variables: { day: formattedDate },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Pas de réservation pour aujourd'hui</p>;

  if (!data.getReservationsByDay.length) return <p>Pas de réservation aujourd'hui</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Nom du client</th>
          <th>Table</th>
          <th>Date</th>
          <th>Heure</th>
          <th>Couverts</th>
        </tr>
      </thead>
      <tbody>
        {data.getReservationsByDay.map(reservation => (
          <tr key={reservation.id}>
            <td>
              {reservation.user.firstName} {reservation.user.lastName}
            </td>
            <td>{reservation.table.title}</td>
            <td>{new Date(reservation.date).toLocaleDateString()}</td>
            <td>{reservation.reservationHour}</td>
            <td>{reservation.places}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GetReservations;
