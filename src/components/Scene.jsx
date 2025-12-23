import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const FloatingObject = ({ position, color, speed, size, distort }) => {
    const mesh = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        mesh.current.rotation.x = Math.cos(t / 4) / 2;
        mesh.current.rotation.y = Math.sin(t / 4) / 2;
        mesh.current.rotation.z = Math.sin(t / 4) / 2;
        mesh.current.position.y = position[1] + Math.sin(t * speed) * 0.5;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={mesh} args={[size, 64, 64]} position={position}>
                <MeshDistortMaterial
                    color={color}
                    speed={distort}
                    distort={0.4}
                    radius={1}
                    roughness={0.4}
                    metalness={0.1}
                />
            </Sphere>
        </Float>
    );
};

const Scene = () => {
    const objects = useMemo(() => [
        { position: [-4, 2, -5], color: '#4BF5D3', speed: 1, size: 1.2, distort: 2 },
        { position: [5, -3, -8], color: '#8B5CF6', speed: 1.2, size: 2, distort: 1.5 },
        { position: [-6, -4, -10], color: '#3B82F6', speed: 0.8, size: 1.5, distort: 2.5 },
        { position: [7, 4, -6], color: '#4BF5D3', speed: 1.5, size: 0.8, distort: 3 },
        { position: [0, 0, -15], color: '#1A1A2E', speed: 0.5, size: 5, distort: 1 },
    ], []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

                {objects.map((obj, i) => (
                    <FloatingObject key={i} {...obj} />
                ))}

                <fog attach="fog" args={['#0B0E23', 5, 25]} />
            </Canvas>
        </div>
    );
};

export default Scene;
