"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroProfile from "@/components/IntroProfile";
import IndexContent from "@/components/IndexContent";

export default function Index() {
    const [entered, setEntered] = useState(false);

    return (
        <div className="relative min-h-screen bg-background overflow-hidden">
            {/* intro screen */}
            <AnimatePresence>
                {!entered && (
                    <IntroProfile onEnter={() => setEntered(true)} />
                )}
            </AnimatePresence>

            {/* main content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{
                opacity: entered ? 1 : 0,
                y: entered ? 0 : 40,
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <IndexContent />
            </motion.div>
        </div>
    );
}