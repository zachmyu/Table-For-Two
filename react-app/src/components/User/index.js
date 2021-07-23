import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux'
import { getReservations, createReservation, updateReservation, deleteReservation} from '../../store/reservations'


// import { Modal } from '../../'
import "./User.css"

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const reservations = useSelector(state => state.reservations)
  let reservationsArray = Object.values(reservations)
  const [date, setDate] = useState(new Date());
  const [people, setPeople] = useState(2)
  const [booking, setBooking] = useState(false)
  const [duration, setDuration] = useState(1.0)
  const [showForm, setShowForm] = useState(false)
  const [formId, setFormId] = useState(null)
  const dispatch = useDispatch();
  const history = useHistory()


  useEffect(() => {
     dispatch(getReservations(userId))
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

  const editReservation = async (reservationId, reservation_datetime, party_size, duration, e) => {
    e.preventDefault();
    await dispatch(updateReservation(userId, reservation_datetime, party_size, duration, reservationId))
    setDate('')
    setPeople('')
    setDuration(0.0)
    history.push(`/users/${user.id}`)
  }

  const openForm = (reservation) => {
    setShowForm(true)
    setDate(reservation.reservation_datetime)
    setPeople(reservation.party_size)
    setDuration(reservation.duration)
  }

  const deleteSingleReservation = async (reservationId) => {
    let alert = window.confirm('Are you sure you want to delete this reservation?')
    if (alert) {
      dispatch(deleteReservation(reservationId))
    }
    history.push(`/users/${user.id}`)
  }

  console.log('Reservations', reservations )
  console.log('Cmon print!', reservationsArray)
  
  return (
    <>
      <div className="header-container">
        <img id='profile_img' src={user.profile_image_url} ></img>
        <h1>{user.username}</h1>
      </div>
      <Grid container align="center">
        <Grid item md={3}></Grid>
        <Grid item md={6}>
            <h2 className="h2-container">Current Reservations </h2>
            {reservationsArray.map(reservation => (
              <div>
                <button onClick={() => console.log(reservation)}>Using reservationArray</button>

              </div>
            ))}
            {Object.values(reservations).map(reservation => (
              <div>
                <button onClick={() => console.log(reservation)}>Using Object.values(reservations)</button>
              </div>
            ))}
            <h2 className="h2-container">Reviews</h2>
        </Grid>
        <Grid item md={3}></Grid>
      </Grid>
    </>
  );
}
export default User;
