import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Calendar from '../Calendar'
import { createReservation } from '../../store/reservations';


const durations = [1, 2, 3]

function ReservationForm({ venue_id, venue, reservations }) {
    const sessionUser = useSelector(state => state.session.user)
    const [reservation_datetime, setReservationDateTime] = useState(new Date());
    const [people, setPeople] = useState(2)
    const [duration, setDuration] = useState(1.0)
    const dispatch = useDispatch()

    const reservation = async (e) => {
        e.preventDefault();
        dispatch(createReservation({ user_id: sessionUser.id, venue_id, reservation_datetime, party_size: Number(people), duration: Number(duration) }))
    }

    return (
        <>
            <span>Make a new reservation!</span>
            <Calendar reservation_datetime={reservation_datetime} setReservationDateTime={setReservationDateTime}></Calendar>
            <div className='reservation-element'>
                <span>People: </span>
                <select
                    onChange={(e) => {
                        Number(setPeople(Number(e.target.value)))
                    }}
                    value={people}>
                    <option defaultValue="" value="1">For 1</option>
                    <option value="2">For 2</option>
                    <option value="3">For 3</option>
                    <option value="4">For 4</option>
                    <option value="5">For 5</option>
                    <option value="6">For 6</option>
                    <option value="7">For 7</option>
                    <option value="8">For 8</option>
                    <option value="9">For 9</option>
                    <option value="10">For 10</option>
                    <option value="11">For 11</option>
                    <option value="12">For 12</option>
                    <option value="13">For 13</option>
                    <option value="14">For 14</option>
                    <option value="15">For 15</option>
                    <option value="16">For 16</option>
                    <option value="17">For 17</option>
                    <option value="18">For 18</option>
                    <option value="19">For 19</option>
                    <option value="20">For 20</option>
                </select>
            </div>
            <div className='reservation-element'>
                <span>Duration:  </span>
                <select value={duration} onChange={e => Number(setDuration(Number(e.target.value)))}>
                    {durations.map((duration) => (
                        <option key={duration} value={Number(duration)}>{duration} Hour(s)</option>
                    ))}
                </select>
            </div>
            <button className='button1' onClick={reservation}>Make a reservation</button>
        </>
    )

}

export default ReservationForm
