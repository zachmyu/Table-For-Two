import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Modal } from '../../'

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
      <img src={user.profile_image_url} ></img>
      <h1>{user.username}</h1>
      <h2>Current Reservations</h2>
      <h2>Reviews</h2>
    </>

  );
}
export default User;
