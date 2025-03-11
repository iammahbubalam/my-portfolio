import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useInView } from 'framer-motion';

// Floating object with text label
function FloatingIcon({ position, color, icon, scale = 1 }: { position: [number, number, number], color: string, icon: string, scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });
  
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh position={position} ref={meshRef} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.2} 
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.2} 
        />
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {icon}
        </Text>
      </mesh>
    </Float>
  );
}

// Background particles
function BackgroundParticles({ count = 100 }) {
  const points = useRef<THREE.Points>(null!);
  
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      points.current.rotation.y = state.clock.getElapsedTime() * 0.075;
    }
  });
  
  // Create particles
  const particlesPosition = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    particlesPosition[i3] = (Math.random() - 0.5) * 25;
    particlesPosition[i3 + 1] = (Math.random() - 0.5) * 25;
    particlesPosition[i3 + 2] = (Math.random() - 0.5) * 25;
  }
  
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          args={[particlesPosition, 3]}
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.6} />
    </points>
  );
}

// Main 3D scene
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      <BackgroundParticles count={200} />
      
      {/* Technology icons */}
      <FloatingIcon position={[-3, 0, 0]} color="#FF0000" icon="Java" />
      <FloatingIcon position={[-1.5, 2, -2]} color="#3178C6" icon="Spring" scale={0.8} />
      <FloatingIcon position={[2, -1, -1]} color="#336791" icon="SQL" />
      <FloatingIcon position={[0, -2, 2]} color="#47A248" icon="MongoDB" scale={0.9} />
      <FloatingIcon position={[3, 1, 0]} color="#F7DF1E" icon="AI/ML" />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI - Math.PI / 4}
      />
    </>
  );
};

// Main component export
const HeroScene = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  return (
    <div ref={ref} className="w-full h-[500px] md:h-[600px]">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        {isInView && <Scene />}
      </Canvas>
    </div>
  );
};

export default HeroScene;
