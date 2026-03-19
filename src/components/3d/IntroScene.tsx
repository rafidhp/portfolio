"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo } from "react";

// particle layer
function ParticleLayer({
    count = 4000,
    spread = 30,
    speed = 0.02,
}: {
    count?: number;
    spread?: number;
    speed?: number;
}) {
    const ref = useRef<THREE.Points>(null!);
    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const radius = spread * Math.random();
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);
        }
        return positions;
    }, [count, spread]);

    useFrame((state) => {
        ref.current.rotation.y =
        state.clock.elapsedTime * speed;
    });

    return (
        <Points ref={ref} positions={particles} stride={3}>
            <PointMaterial
                transparent
                size={0.02}
                sizeAttenuation
                depthWrite={false}
                opacity={0.5}
                color="#4fd1c5"
            />
        </Points>
    );
}

// parallax bg
function ParallaxBackground() {
    const mesh = useRef<THREE.Mesh>(null!);
    useFrame((state) => {
        const { mouse } = state;
        mesh.current.position.x = THREE.MathUtils.lerp(
            mesh.current.position.x,
            mouse.x * 1.5,
            0.03
        );
        mesh.current.position.y = THREE.MathUtils.lerp(
            mesh.current.position.y,
            mouse.y * 1.5,
            0.03
        );
    });

    return (
        <mesh ref={mesh} position={[0, 0, -15]}>
            <planeGeometry args={[60, 60]} />
            <meshBasicMaterial
                color="#0a1620"
                transparent
                opacity={0.6}
            />
        </mesh>
    );
}

// camera motion
function CameraMotion() {
    useFrame((state) => {
        const { mouse, camera } = state;
        const targetX = mouse.x * 0.8;
        const targetY = mouse.y * 0.6;

        camera.position.x = THREE.MathUtils.lerp(
            camera.position.x,
            targetX,
            0.04
        );
        camera.position.y = THREE.MathUtils.lerp(
            camera.position.y,
            targetY,
            0.04
        );
        camera.lookAt(0, 0, 0);
    });

    return null;
}

// cursor light
function CursorLight() {
    const mesh = useRef<THREE.Mesh>(null!);

    const raycaster = useMemo(() => new THREE.Raycaster(), []);
    const plane = useMemo(
        () => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
        []
    );

    const intersection = useMemo(() => new THREE.Vector3(), []);

    // soft elegant glow texture
    const texture = useMemo(() => {
        const size = 256;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;

        const ctx = canvas.getContext("2d")!;
        const g = ctx.createRadialGradient(
            size / 2,
            size / 2,
            0,
            size / 2,
            size / 2,
            size / 2
        );

        g.addColorStop(0, "rgba(79,209,197,0.8)");
        g.addColorStop(0.3, "rgba(79,209,197,0.35)");
        g.addColorStop(0.7, "rgba(79,209,197,0.08)");
        g.addColorStop(1, "rgba(79,209,197,0)");

        ctx.fillStyle = g;
        ctx.fillRect(0, 0, size, size);

        return new THREE.CanvasTexture(canvas);
    }, []);

    useFrame((state) => {
        const { mouse, camera, clock } = state;

        // project cursor into world
        raycaster.setFromCamera(mouse, camera);
        raycaster.ray.intersectPlane(plane, intersection);

        // smooth follow
        mesh.current.position.lerp(intersection, 0.18);

        // subtle breathing
        const scale = 1 + Math.sin(clock.elapsedTime * 1.5) * 0.04;
        mesh.current.scale.setScalar(scale);
    });

    return (
        <mesh ref={mesh} position={[0, 0, 0.5]} renderOrder={10}>
            <planeGeometry args={[5, 5]} />
            <meshBasicMaterial
                map={texture}
                transparent
                blending={THREE.AdditiveBlending}
                depthWrite={false}
                toneMapped={false}
            />
        </mesh>
    );
}

export default function IntroScene() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                {/* lights */}
                <ambientLight intensity={0.5} />
                <pointLight position={[5, 5, 5]} intensity={2} />

                {/* camera motion */}
                <CameraMotion />

                {/* background parallax */}
                <ParallaxBackground />

                <CursorLight />

                {/* FAR particles */}
                <Float speed={0.5} rotationIntensity={0.2} floatIntensity={1}>
                    <ParticleLayer count={5000} spread={40} speed={0.01} />
                </Float>

                {/* NEAR particles */}
                <Float speed={1} rotationIntensity={0.4} floatIntensity={2}>
                    <ParticleLayer count={2500} spread={20} speed={0.03} />
                </Float>
            </Canvas>
        </div>
    );
}