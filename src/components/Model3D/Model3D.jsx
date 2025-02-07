import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/MSI/models/pc.glb', true); // Cache enabled for faster re-use

  const optimizedScene = useMemo(() => {
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
        obj.frustumCulled = true; 
      }
    });
    return scene;
  }, [scene]);

  return <primitive object={optimizedScene} scale={[0.4, 0.4, 0.4]} />;
}

// Preload GLTF
useGLTF.preload('/MSI/models/pc.glb');

export default function Model3D() {
  return (
    <Canvas shadows dpr={[1, 1.5]} camera={{ position: [4, 2.5, 5], fov: 50 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} castShadow intensity={1} />
        <Model />
        <OrbitControls enableZoom={false}/>
      </Suspense>
    </Canvas>
  );
}
