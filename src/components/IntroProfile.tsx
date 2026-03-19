"use client";

import { motion } from "framer-motion";

interface Props {
    onEnter: () => void;
}

export default function IntroProfile({ onEnter }: Props) {
    return (
        <motion.div
            onClick={onEnter}
            initial={{ opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="
                fixed inset-0 z-[100]
                flex items-center justify-center
                bg-background
                cursor-pointer
                select-none"
        >
        {/* subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            {/* content */}
            <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="
                    relative
                    w-[min(900px,90vw)]
                    glass-panel
                    px-12 py-14
                    text-center
                    space-y-6"
            >
                <img
                src="/profile-square.jpeg"
                className="
                    w-32 h-32
                    rounded-full
                    mx-auto
                    border border-primary/30
                    shadow-lg"
                />
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight">
                        John Doe
                    </h1>
                    <p className="text-muted-foreground">
                        Fullstack Developer • System Builder • Problem Solver
                    </p>
                </div>

                {/* info */}
                <div className="flex flex-wrap justify-center gap-6 text-sm font-mono text-muted-foreground">
                    <span>john@email.com</span>
                    <span>github.com/johndoe</span>
                    <span>Indonesia</span>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-12 text-xs font-mono text-primary animate-pulse"
            >
                Click anywhere to continue ↓
            </motion.div>
        </motion.div>
    )
}