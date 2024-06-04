import React, { useEffect, useState } from 'react';
import Sensors from './Sensors';
import Users from './Users';
import { database } from '../firebase'; // Import only Realtime Database

function Dashboard() {
  const [sensorData, setSensorData] = useState({});
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchSensorData = async () => {
      const sensorRef = database.ref('sensors');
      sensorRef.on('value', (snapshot) => {
        setSensorData(snapshot.val());
      });
    };

    const fetchUserData = async () => {
      const usersRef = database.ref('users');
      usersRef.on('value', (snapshot) => {
        setUserData(snapshot.val());
      });
    };

    fetchSensorData();
    fetchUserData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <Sensors data={sensorData} />
      <Users data={userData} />
    </div>
  );
}

export default Dashboard;
