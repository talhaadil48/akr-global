'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, Stars, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function GoldenObject({ mouseX, mouseY }: { mouseX: React.MutableRefObject<number>; mouseY: React.MutableRefObject<number> }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.003;
    meshRef.current.rotation.y += 0.005;
    meshRef.current.rotation.x += (mouseY.current * 0.3 - meshRef.current.rotation.x) * 0.02;
    meshRef.current.rotation.y += (mouseX.current * 0.3 - meshRef.current.rotation.y) * 0.02;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
  });

  return (
    <TorusKnot ref={meshRef} args={[1.2, 0.38, 200, 32]}>
      <MeshDistortMaterial
        color="#D4AF37"
        emissive="#C9A227"
        emissiveIntensity={0.3}
        metalness={0.9}
        roughness={0.1}
        distort={0.15}
        speed={2}
      />
    </TorusKnot>
  );
}

function Scene({ mouseX, mouseY }: { mouseX: React.MutableRefObject<number>; mouseY: React.MutableRefObject<number> }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#D4AF37" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#F0D060" />
      <pointLight position={[0, 0, 8]} intensity={1.2} color="#ffffff" />
      <Stars radius={80} depth={50} count={3000} factor={3} saturation={0} fade speed={1} />
      <GoldenObject mouseX={mouseX} mouseY={mouseY} />
    </>
  );
}

export default function Hero3D() {
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.current = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    mouseY.current = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  };

  return (
    /* suppressHydrationWarning: R3F/Canvas causes unavoidable hydration differences
       because WebGL context is only available client-side. This is safe here since
       HeroSection imports this component with { ssr: false } via next/dynamic. */
    <div
      style={{ width: '100%', height: '100%' }}
      onMouseMove={handleMouseMove}
      suppressHydrationWarning
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene mouseX={mouseX} mouseY={mouseY} />
      </Canvas>
    </div>
  );
}
