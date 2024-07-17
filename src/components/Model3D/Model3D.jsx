import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/models/scene.glb'); // Adjust the path if needed

  console.log('Model scene:', scene); // Check if materials are present in the console

  return <primitive object={scene} scale={[0.5, 0.5, 0.5]} />;
}

export default function Model3D() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Model />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
}
