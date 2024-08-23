import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

// Define the type for the point object
interface Point3D {
  x: number;
  y: number;
  z: number;
}

// Define the props interface for the ThreeDScene component
interface ThreeDSceneProps {
  points: Point3D[];
}

const ThreeDScene: React.FC<ThreeDSceneProps> = ({ points }) => {
     
  return (
    <Canvas style={{ width: '100%', height: '400px' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />

      {points.map((point, index) => (
        <Sphere key={index} position={[point.x, point.y, point.z]} args={[0.1, 16, 16]}>
          <meshStandardMaterial color="red" />
        </Sphere>
      ))}
    </Canvas>
  );
};

export default ThreeDScene;
