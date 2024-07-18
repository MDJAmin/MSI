import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/models/pc.glb'); // Adjust the path if needed

  console.log('Model scene:', scene); // Check if materials are present in the console

  return <primitive object={scene} scale={[0.4, 0.4, 0.4]} />;
}

// Preload the GLTF file
useGLTF.preload('/models/scene.gltf');

export default function Model3D() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={5}/>
        <pointLight position={[10, 10, 10]} />
        <Model />
        {/* <OrbitControls enableZoom={false}  maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/> */}
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
}
