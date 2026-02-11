import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TorusKnot, MeshDistortMaterial, Float } from '@react-three/drei';

export default function FloatingObject() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      // Slow, mesmerizing rotation
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <TorusKnot ref={meshRef} args={[1.2, 0.4, 200, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#ffffff"
          emissive="#111111"
          roughness={0.1}
          metalness={1}
          distort={0.2}
          speed={1.5}
        />
      </TorusKnot>
    </Float>
  );
}
