import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Train() {
  return (
    <group position={[0, 0.5, 0]}>
      {/* Train Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* Train Engine (Cylinder Front) */}
      <mesh position={[1.2, -0.4, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 1, 32]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </group>
  );
}

function Station() {
  return (
    <group position={[0, 0, 0]}>
      {/* Platform */}
      <mesh position={[0, 0, -1.1]}>
        <boxGeometry args={[5, 0.2, 2]} />
        <meshStandardMaterial color="#999" />
      </mesh>
      {/* Roof */}
      <mesh position={[0, 1, -1.1]}>
        <boxGeometry args={[5, 0.2, 2]} />
        <meshStandardMaterial color="#444" />
      </mesh>
      {/* Left Pillar */}
      <mesh position={[-2.2, 0.6, -1.1]}>
        <boxGeometry args={[0.2, 1, 2]} />
        <meshStandardMaterial color="#666" />
      </mesh>
      {/* Right Pillar */}
      <mesh position={[2.2, 0.6, -1.1]}>
        <boxGeometry args={[0.2, 1, 2]} />
        <meshStandardMaterial color="#666" />
      </mesh>
    </group>
  );
}

export default function TrainStation3D() {
  return (
    <Canvas style={{ height: 300 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} />
      <Train />
      <Station />
      <OrbitControls />
    </Canvas>
  );
}
