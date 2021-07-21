import { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Calendar from '../Calendar'
import DropDown from '../DropDown';
import { createReservation } from '../../store/reservations';


const options = [
    { value: '1', label: '1 Person' },
    { value: '2', label: '2 People' },
    { value: '3', label: '3 People' },
    { value: '4', label: '4 People' },
    { value: '5', label: '5 People' },
    { value: '6', label: '6 People' },
    { value: '7', label: '7 People' },
    { value: '8', label: '8 People' },
    { value: '9', label: '9 People' },
    { value: '10', label: '10 People' },
    { value: '11', label: '11 People' },
    { value: '12', label: '12 People' },
    { value: '13', label: '13 People' },
    { value: '14', label: '14 People' },
    { value: '15', label: '15 People' },
    { value: '16', label: '16 People' },
    { value: '17', label: '17 People' },
    { value: '18', label: '18 People' },
    { value: '19', label: '19 People' },
    { value: '20', label: '20 People' }
]

const durations = [1,2,3]

function ReservationForm({venue_id, venue}) {
    const sessionUser = useSelector(state => state.session.user)
    // const [reservation_datetime, setReservationDateTime] = useState
    const [date, setDate] = useState(new Date())
    const [people, setPeople] = useState({})
    const [booking, setBooking] = useState(false)
    const [duration, setDuration] = useState(1.0)
    // const venue = useSelector(state => state.)
    const venues = useSelector(state => state.venues)
    const map = Object.values(venues)
    const dispatch = useDispatch()

    const reservation = async (e) => {
        e.preventDefault();
        dispatch(createReservation({user_id: sessionUser.id, venue_id, reservation_datetime: date, party_size: people, duration}))
        // const newReservation = {
        //     user_id,
        //     venue_id,
        //     reservation_datetime,
        //     party_size: people.value,
        //     duration: Number(durations)
        // }
        // await dispatch(createReservation(newReservation))
        // (async() => {
        //     const response = await fetch(`/api/reservations`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             user_id: user.id,
        //             venue_id: map[0]['0']['id'],
        //             reservation_datetime: date,
        //             party_size: people.value,
        //             duration: Number(durations)
        //         })
        //     })
        //     setBooking(true)
        // })()

    }

    return (
        <div>
            <div>Make a new reservation</div>
            <hr />
            <Calendar date={date} setDate={setDate}></Calendar>
            <DropDown people={people} setPeople={setPeople}></DropDown>
            <div>
                <div>
                    <select value={duration} onChange={e => setDuration(e.target.value)}>
                        {durations.map((duration) => (
                            <option key={duration} value={Number(duration)}>{duration}</option>
                        ))}
                    </select>
                </div>
                <button onClick={reservation}>Make a reservation</button>
            </div>
        </div>
    )

}

export default ReservationForm