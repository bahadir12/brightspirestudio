"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function IntroSection() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-center">
            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] animate-pulse" />

            <div className="relative z-10 max-w-4xl space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-mono text-primary/80 tracking-widest uppercase">Systems Online</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6">
                        Illuminating the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">Unknown.</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light max-w-2xl mx-auto"
                >
                    Brightspire Studio stands at the convergence of <span className="text-white font-medium">high-performance gaming</span> and <span className="text-white font-medium">robust system architecture</span>.
                    We don't just write code; we forge digital realities and the invisible backbones that sustain them.
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 flex flex-col items-center gap-2 text-zinc-500"
            >
                <span className="text-xs font-mono uppercase tracking-widest">Explore Division</span>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ArrowDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
}
