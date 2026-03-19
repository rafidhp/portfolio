"use client";

import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import { useEffect } from "react";

export default function DepthCursor() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, {
        stiffness: 120,
        damping: 25,
        mass: 0.8,
    });
    const smoothY = useSpring(mouseY, {
        stiffness: 120,
        damping: 25,
        mass: 0.8,
    });

    const glowX = useSpring(mouseX, {
        stiffness: 60,
        damping: 30,
        mass: 1.5,
    });
    const glowY = useSpring(mouseY, {
        stiffness: 60,
        damping: 30,
        mass: 1.5,
    });

    const velX = useVelocity(mouseX);
    const velY = useVelocity(mouseY);

    const speed = useMotionValue(0);

    useEffect(() => {
        const updateSpeed = () => {
            const vx = velX.get();
            const vy = velY.get();
            const v = Math.sqrt(vx * vx + vy * vy);
            speed.set(v);
        };
        const unsubX = velX.on("change", updateSpeed);
        const unsubY = velY.on("change", updateSpeed);
        return () => {
            unsubX();
            unsubY();
        };
    }, [velX, velY, speed]);

    // smooth energy response
    const smoothSpeed = useSpring(speed, {
        stiffness: 80,
        damping: 20,
        mass: 1.2,
    });

    // glow reacts
    const scale = useTransform(smoothSpeed, [0, 1200], [1, 1.4]);
    const opacity = useTransform(smoothSpeed, [0, 1200], [0.25, 0.45]);

    const driftX = useMotionValue(0);
    const driftY = useMotionValue(0);

    useAnimationFrame((t) => {
        driftX.set(Math.sin(t / 900) * 6);
        driftY.set(Math.cos(t / 1100) * 6);
    });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, [mouseX, mouseY]);

    return (
        <>
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-[9998]"
                style={{
                    x: glowX,
                    y: glowY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <motion.div
                    style={{
                        scale,
                        opacity,
                        x: driftX,
                        y: driftY,
                    }}
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        w-44 h-44
                        rounded-full
                        bg-cyan-400/20
                        blur-3xl
                    "
                />
            </motion.div>

            {/* core cursor */}
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-[9999]"
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        w-3 h-3
                        rounded-full
                        bg-cyan-300
                        shadow-[0_0_14px_rgba(79,209,197,0.9)]
                    "
                />
            </motion.div>
        </>
    );
}