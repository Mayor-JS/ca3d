// src/App.tsx

import React, { useState, ChangeEvent } from 'react';
import { Point3D } from './Point3d'; // Ensure this path is correct based on your project structure
import ThreeDScene from './ThreeDScene';

function App() {
  // State to store an array of Point3D instances
  const [points, setPoints] = useState<Point3D[]>([]);
  
  // State for x, y, z coordinates
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [z, setZ] = useState<number>(0);

  // Handler to update x state
  const handleXChange = (e: ChangeEvent<HTMLInputElement>) => {
    setX(parseFloat(e.target.value));
  };

  // Handler to update y state
  const handleYChange = (e: ChangeEvent<HTMLInputElement>) => {
    setY(parseFloat(e.target.value));
  };

  // Handler to update z state
  const handleZChange = (e: ChangeEvent<HTMLInputElement>) => {
    setZ(parseFloat(e.target.value));
  };

  // Function to add a new Point3D to the array
  const addPoint = () => {
    const newPoint = new Point3D(x, y, z);
    setPoints([...points, newPoint]);
  };

  return (
    <>
      <div>
        <h1>3D Point Visualization</h1>
      </div>

      <div>
        <label>
          x:
          <input 
            type="number" 
            value={x} 
            onChange={handleXChange}
          />
        </label>

        <label>
          y:
          <input 
            type="number" 
            value={y} 
            onChange={handleYChange}
          />
        </label>

        <label>
          z:
          <input 
            type="number" 
            value={z} 
            onChange={handleZChange}
          />
        </label>

        <button onClick={addPoint}>Add Point</button>
      </div>
                <ThreeDScene points={points}/>
      <div>
        <h2>Points:</h2>
        <ul>
          {points.map((point, index) => (
            <li key={index}>
              ({point.x}, {point.y}, {point.z})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
