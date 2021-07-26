import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux'
import { updateReservation } from '../../store/reservations'
// import { updateReservation, deleteReservation } from '../../store/reservations'
import { getVenues } from '../../store/venue'
import Calendar from '../Calendar'

import "./User.css"

function User() {
    const [user, setUser] = useState({});
    const { userId } = useParams();
    const sessionUser = useSelector(state => state.session.user.reservations)
    const [reservation_datetime, setReservationDateTime] = useState(new Date());
    const [party_size, setPartySize] = useState(2)
    const [duration, setDuration] = useState(1.0)
    const venues = useSelector(state => state?.venues)
    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        dispatch(getVenues())
    }, [dispatch])

    useEffect(() => {
        if (!userId) {
            return;
        }
        (async () => {
            const response = await fetch(`/api/users/${userId}`);
            const user = await response.json();
            setUser(user);
        })();
    }, [userId]);

    if (!user) {
        return null;
    }

    const editReservation = async (reservation_datetime, party_size, duration, reservationId, venue_id, e) => {
        e.preventDefault();
        dispatch(updateReservation(userId, venue_id, reservation_datetime, party_size, duration, reservationId))
        setReservationDateTime('')
        setPartySize('')
        setDuration(0.0)
        history.push(`/users/${user.id}`)
    }

    // const deleteSingleReservation = async (reservationId) => {
    // 	let alert = window.confirm('Are you sure you want to delete this reservation?')
    // 	if (alert) {
    // 		dispatch(deleteReservation(reservationId))
    // 	}
    // 	history.push(`/users/${user.id}`)
    // }

    const durations = [1, 2, 3]

    return (
        <>
            <div className="header-container">
                <img id='profile_img' src={user.profile_image_url} alt={user.username}></img>
                <h1>  {user.first_name}!</h1>
            </div>
            <h2 className="h2-container">Current Reservations </h2>
            {Object.values(sessionUser.reservations).map(reservation => (
                <>
                    {/* {Object.values(venues).map(venue => ( */}
                    <div>
                        {reservation.venue_id === venue.id && (
                            <div>
                                <img src={venue.image_url} alt={venue.name}></img>
                                <a href={`/venues/${venue.id}`}>
                                    {venue.name}
                                </a>
                                <div>
                                    <form onSubmit={(e) => editReservation(reservation.reservation_datetime, reservation.party_size, reservation.duration, reservation.id, venue.id, e)} key={reservation.id}>

                                        <Calendar reservation_datetime={reservation_datetime} setReservationDateTime={setReservationDateTime} ></Calendar>
                                        <select
                                            onChange={(e) => {
                                                Number(setPartySize(Number(e.target.value)))
                                            }}
                                            value={party_size}
                                        >
                                            <option selected="" value="1">For 1</option>
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
                                        <select value={duration} onChange={e => Number(setDuration(Number(e.target.value)))}>
                                            {durations.map((duration) => (
                                                <option key={duration} value={Number(duration)}>{duration}</option>
                                            ))}
                                        </select>
                                        <button onClick={editReservation}>Edit your current reservation</button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* ))} */}
                </>
            ))}



        </>
    );
}
export default User;
