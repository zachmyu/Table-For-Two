import React from 'react'
import { createReservation } from '../../store/reservations'
import ReservationForm from '../../components/Reservations/ReservationForm'

function NewReservation({ venue_id }) {
    return (
        <div>
            <ReservationForm createReservation={createReservation}
                venue_id={venue_id}>
            </ReservationForm>
        </div>
    )
}

export default NewReservation
