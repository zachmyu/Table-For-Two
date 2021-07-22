import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Modal } from '../../'
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
      <div className="content-container">
        <h2>Current Reservations</h2>
        <h2>Reviews</h2>
      </div>
    </>
  );
}
export default User;
