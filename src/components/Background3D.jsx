import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment, Stars } from '@react-three/drei';
import FloatingObject from './FloatingObject';
import Particles from './Particles';

export default function Background3D() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      background: '#050505' // Deep void black
    }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <fog attach="fog" args={['#050505', 5, 20]} />
        
        {/* Cinematic Lighting */}
        <ambientLight intensity={0.2} /> {/* Very dim ambient */}
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={2} 
          color="#ffffff" 
          castShadow 
        />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4f46e5" /> {/* Subtle colored rim light */}
        
        {/* Central Hero Object */}
        <group position={[2, 0, 0]}> {/* Offset slightly right to balance text */}
           <FloatingObject />
        </group>
        
        {/* Environment for reflections */}
        <Environment preset="night" />
        
        {/* Starfield */}
        <Stars radius={100} depth={50} count={5000} factor={6} saturation={0} fade speed={1} />
        <Particles count={500} /> {/* Interactive foreground particles */}
      </Canvas>
    </div>
  );
}
