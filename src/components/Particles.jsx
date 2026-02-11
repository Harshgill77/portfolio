import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function Particles({ count = 1500 }) {
  const points = useRef();
  const { viewport, mouse } = useThree();
  
  const particlesData = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);
    const randoms = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
        // Wider spread for space theme
      const x = (Math.random() - 0.5) * 60;
      const y = (Math.random() - 0.5) * 40;
      const z = (Math.random() - 0.5) * 30;
      
      positions.set([x, y, z], i * 3);
      originalPositions.set([x, y, z], i * 3);
      randoms[i] = Math.random();
    }

    
    return { positions, originalPositions, randoms };
  }, [count]);

  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const context = canvas.getContext('2d');
    context.fillStyle = 'white';
    context.beginPath();
    context.arc(16, 16, 16, 0, Math.PI * 2);
    context.fill();
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  useFrame((state) => {
    if (!points.current) return;
    
    const positions = points.current.geometry.attributes.position.array;
    const { originalPositions, randoms } = particlesData;
    
    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      let px = positions[i3];
      let py = positions[i3 + 1];
      let pz = positions[i3 + 2];
      
      const ox = originalPositions[i3];
      const oy = originalPositions[i3 + 1];
      const oz = originalPositions[i3 + 2];
      
      const dx = mouseX - px;
      const dy = mouseY - py;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Stronger repulsion for "disrupting stars" effect
      const repulsionRadius = 5;
      const returnSpeed = 0.02; // Slower return for floaty space feel
      const repulsionForce = 0.8;
      
      if (dist < repulsionRadius) {
        const angle = Math.atan2(dy, dx);
        const force = (repulsionRadius - dist) * repulsionForce;
        
        px -= Math.cos(angle) * force;
        py -= Math.sin(angle) * force;
        pz += (Math.random() - 0.5) * force * 2; // More Z scattering
      } else {
        px += (ox - px) * returnSpeed;
        py += (oy - py) * returnSpeed;
        pz += (oz - pz) * returnSpeed;
      }
      
      // Twinkle/Float effect
      const time = state.clock.elapsedTime;
      positions[i3] = px + Math.sin(time * 0.3 + randoms[i] * 100) * 0.05;
      
      // Update position
      positions[i3 + 1] = py; 
      positions[i3 + 2] = pz;
    }
    
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesData.positions.length / 3}
          array={particlesData.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#ffffff" /* Bright white stars */
        map={texture}
        alphaTest={0.5}
        sizeAttenuation
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
