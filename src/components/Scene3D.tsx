import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

function FloatingShape({
  position,
  geometry,
  color,
  speed = 1,
  scale = 1,
}: {
  position: [number, number, number];
  geometry: 'icosa' | 'torus' | 'sphere' | 'octa';
  color: string;
  speed?: number;
  scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.15 * speed;
    ref.current.rotation.y = t * 0.2 * speed;
  });

  const geom =
    geometry === 'icosa' ? (
      <icosahedronGeometry args={[1, 0]} />
    ) : geometry === 'torus' ? (
      <torusGeometry args={[0.8, 0.28, 32, 96]} />
    ) : geometry === 'octa' ? (
      <octahedronGeometry args={[1, 0]} />
    ) : (
      <sphereGeometry args={[1, 48, 48]} />
    );

  return (
    <Float speed={1.2 * speed} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={ref} position={position} scale={scale}>
        {geom}
        <MeshTransmissionMaterial
          backside
          backsideThickness={0.4}
          thickness={0.5}
          roughness={0.12}
          chromaticAberration={0.04}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.4}
          temporalDistortion={0.1}
          ior={1.4}
          color={color}
          transmission={1}
          attenuationColor={color}
          attenuationDistance={1.6}
        />
      </mesh>
    </Float>
  );
}

function ParallaxGroup({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!group.current) return;
    // Subtle parallax tied to mouse position
    const targetX = (state.pointer.x * viewport.width) / 80;
    const targetY = (state.pointer.y * viewport.height) / 80;
    group.current.position.x += (targetX - group.current.position.x) * 0.05;
    group.current.position.y += (targetY - group.current.position.y) * 0.05;
  });

  return <group ref={group}>{children}</group>;
}

export default function Scene3D() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <directionalLight position={[-5, -3, -2]} intensity={0.6} color="#34d399" />

          <ParallaxGroup>
            <FloatingShape position={[-3.2, 1.4, 0]} geometry="icosa" color="#34d399" scale={1.1} />
            <FloatingShape position={[3.4, -1.2, -1]} geometry="torus" color="#fbbf24" speed={0.8} scale={1} />
            <FloatingShape position={[-2.4, -2.1, -2]} geometry="sphere" color="#fde68a" speed={1.2} scale={0.7} />
            <FloatingShape position={[3.0, 2.2, -2]} geometry="octa" color="#10b981" speed={0.9} scale={0.85} />
            <FloatingShape position={[0, -3.2, -3]} geometry="icosa" color="#f59e0b" speed={0.7} scale={0.55} />
          </ParallaxGroup>

          <Environment preset="city" />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950/60" />
    </div>
  );
}
