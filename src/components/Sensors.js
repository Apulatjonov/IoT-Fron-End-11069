import React from 'react';

function Sensors({ data }) {
  return (
    <div>
      <h3>Sensor Data</h3>
      <ul>
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>{`${key}: ${value}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sensors;
