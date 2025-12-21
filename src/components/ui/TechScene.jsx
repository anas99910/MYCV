import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float } from '@react-three/drei';

function ServerRack(props) {
    const group = useRef();

    useFrame((state) => {
        if (!group.current) return;
        const t = state.clock.getElapsedTime();
        group.current.rotation.y = Math.sin(t / 4) / 4;
        group.current.rotation.x = Math.cos(t / 6) / 8;
    });

    return (
        <group ref={group} {...props} dispose={null}>
            {/* Main Chassis */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[2, 3, 1]} />
                <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Glowing Lights Panel - Blue */}
            <mesh position={[0, 1, 0.51]}>
                <planeGeometry args={[1.8, 0.2]} />
                <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={2} />
            </mesh>

            {/* Glowing Lights Panel - Green */}
            <mesh position={[0, 0.5, 0.51]}>
                <planeGeometry args={[1.8, 0.2]} />
                <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={2} />
            </mesh>

            {/* Screen/Detail */}
            <mesh position={[0, -0.5, 0.51]}>
                <planeGeometry args={[1.6, 1]} />
                <meshStandardMaterial color="#0f172a" />
            </mesh>

            {/* Code Lines on Screen */}
            <mesh position={[0, -0.5, 0.52]}>
                <planeGeometry args={[1.4, 0.8]} />
                <meshBasicMaterial color="#22c55e" wireframe />
            </mesh>

            {/* Side Vents */}
            <mesh position={[1.01, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                <planeGeometry args={[0.8, 2.5]} />
                <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.1} />
            </mesh>

            <mesh position={[-1.01, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
                <planeGeometry args={[0.8, 2.5]} />
                <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.1} />
            </mesh>
        </group>
    );
}

const TechScene = () => {
    return (
        <div className="w-full h-[400px] lg:h-[500px] cursor-move">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 6]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22c55e" />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <ServerRack />
                </Float>

                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            </Canvas>
        </div>
    );
};

export default TechScene;
