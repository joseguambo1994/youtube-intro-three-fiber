import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls, Plane } from "@react-three/drei";

import { Physics, useBox, usePlane } from "@react-three/cannon";

import "./App.css";
import PhyPlane from './components/CustomPhyPlane';
import PhyBox from './components/CustomPhyBox';
import PhySphere from './components/CustomPhySphere';

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
    <Canvas camera={{ position: [0, 0, 2] }}>
       <OrbitControls
        enableZoom={true}
        enablePan={false}
        // minPolarAngle={Math.PI / 2}
        // maxPolarAngle={Math.PI / 2}
      />
      <Physics gravity={[0, -10, 0]}>
     
        <PhyPlane
          color="green"
          position={[0, -2, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <PhyPlane position={[0, 0, -10]} />
        <PhyBox position={[2, 0, -5]} />
        <PhyBox position={[0, 0, -5]} />
        <PhyBox position={[-2, 0, -5]} />
        <PhySphere position={[-4, 0, -5]} />
        
      </Physics>
      <ambientLight intensity={0.3} />
      <pointLight intensity={0.8} position={[5, 0, 5]} />
    </Canvas>
    </div>
  );
}

export default App;
