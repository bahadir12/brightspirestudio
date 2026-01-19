"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import Image from "next/image"; 
import { Gamepad2, Server, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { HeroGameVisual, HeroBackendVisual } from "@/components/HeroVisuals";

export function SplitHero() {
    const [hoveredSide, setHoveredSide] = useState<"game" | "backend" | null>(null);

    const getWidth = (side: "game" | "backend") => {
        if (!hoveredSide) return "50%";
        return hoveredSide === side ? "60%" : "40%";
    };

    return (
        <section className="relative h-[85vh] w-full flex flex-col md:flex-row overflow-hidden mt-20 md:mt-0">

            {/* Game Side */}
            <Link href="/game" className="flex-1 contents">
                <motion.div
                    className="relative h-1/2 md:h-full group cursor-pointer border-b md:border-b-0 md:border-r border-white/5"
                    initial={false}
                    animate={{ width: typeof window !== 'undefined' && window.innerWidth >= 768 ? getWidth("game") : "100%" }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    onMouseEnter={() => setHoveredSide("game")}
                    onMouseLeave={() => setHoveredSide(null)}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/10 to-black/80 z-10" />

                    {/* Dynamic Game Background */}
                    <div className="absolute inset-0 z-0 bg-black">
                        <HeroGameVisual />
                    </div>

                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8">
                        <motion.div
                            className="p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 group-hover:border-primary/50 transition-colors shadow-2xl"
                            whileHover={{ y: -5 }}
                        >
                            <Gamepad2 className="w-16 h-16 text-primary mb-4 mx-auto" />
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Game Dev</h2>
                            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-6">Lead: Atacan Gökçe</p>
                            <div className="inline-flex items-center gap-2 text-zinc-400 group-hover:text-white transition-colors">
                                <span>Begin Playground</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </Link>

            {/* Backend Side */}
            <Link href="/backend" className="flex-1 contents">
                <motion.div
                    className="relative h-1/2 md:h-full group cursor-pointer"
                    initial={false}
                    animate={{ width: typeof window !== 'undefined' && window.innerWidth >= 768 ? getWidth("backend") : "100%" }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    onMouseEnter={() => setHoveredSide("backend")}
                    onMouseLeave={() => setHoveredSide(null)}
                >
                    <div className="absolute inset-0 bg-gradient-to-bl from-emerald-900/30 via-cyan-900/10 to-black/80 z-10" />

                    {/* Dynamic Backend Background */}
                    <div className="absolute inset-0 z-0 bg-black">
                        <HeroBackendVisual />
                    </div>

                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8">
                        <motion.div
                            className="p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 group-hover:border-secondary/50 transition-colors shadow-2xl"
                            whileHover={{ y: -5 }}
                        >
                            <Server className="w-16 h-16 text-secondary mb-4 mx-auto" />
                            <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">Systems</h2>
                            <p className="text-secondary font-mono text-sm tracking-wider uppercase mb-6">Lead: Murat Bahadır Kayıhan</p>
                            <div className="inline-flex items-center gap-2 text-zinc-400 group-hover:text-white transition-colors">
                                <span>The Desert of the Real</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </Link>
        </section>
    );
}
