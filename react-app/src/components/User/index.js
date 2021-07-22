import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
// import { Modal } from '../../'
import "./User.css"

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

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
            <h2 className="h2-container">Reviews</h2>
        </Grid>
        <Grid item md={3}></Grid>
      </Grid>
    </>
  );
}
export default User;
