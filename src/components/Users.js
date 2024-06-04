import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import './../css/users.css'; // Ensure this path is correct

function Users({ data }) {
  const [users, setUsers] = useState(data);

  // Update state when data prop changes
  useEffect(() => {
    setUsers(data);
  }, [data]);

  const handleEdit = async (id, newTime) => {
    await firestore.collection('users').doc(id).update({ time: newTime });
    // Update state directly without using the prop
    setUsers(users.map(user => (user.id === id ? { ...user, time: newTime } : user)));
  };

  return (
    <div className="users-container">
      <h3>User Login Activity</h3>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <div className="user-details">
              <div className="username">{user.username}</div>
              <div className="user-present">Present: {user.present ? 'Yes' : 'No'}</div>
              <div className="user-login">Logged in at: {user.loggedIn}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
