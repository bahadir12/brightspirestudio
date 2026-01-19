"use client";

import { motion } from "framer-motion";
import React from "react";
import { Gamepad2, Server, Globe, Database, Share2 } from "lucide-react";

// --- GAME VISUAL: NEON ARCADE CONTROLLER ---
export const HeroGameVisual = () => {
    return (
        <div className="absolute inset-0 overflow-hidden flex items-center justify-center opacity-80">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 via-transparent to-transparent z-0" />

            {/* Animated Controller Wireframe */}
            <div className="relative z-10 scale-[3.5] md:scale-[5.5] rotate-[-15deg] translate-y-16">
                {/* Main Controller Body Glow */}
                <motion.div
                    className="absolute inset-0 bg-indigo-500/30 blur-3xl rounded-full"
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

                <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Controller Shape Path */}
                    <motion.path
                        d="M40 20 C40 20 10 20 10 60 C10 100 40 100 40 100 L60 100 C60 100 70 110 100 110 C130 110 140 100 140 100 L160 100 C160 100 190 100 190 60 C190 20 160 20 160 20 H40Z"
                        stroke="#818cf8"
                        strokeWidth="1.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />

                    {/* D-Pad */}
                    <motion.path d="M40 40 V80 M20 60 H60" stroke="#818cf8" strokeWidth="1.5"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                    />

                    {/* Buttons */}
                    <motion.circle cx="150" cy="60" r="8" stroke="#f472b6" strokeWidth="2"
                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }}
                    />
                    <motion.circle cx="170" cy="50" r="8" stroke="#22d3ee" strokeWidth="2"
                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4 }}
                    />
                    <motion.circle cx="150" cy="40" r="8" stroke="#34d399" strokeWidth="2"
                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6 }}
                    />
                    <motion.circle cx="130" cy="50" r="8" stroke="#fbbf24" strokeWidth="2"
                        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.8 }}
                    />
                </svg>

                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                        style={{ top: "50%", left: "50%" }}
                        animate={{
                            x: Math.cos(i * 45 * (Math.PI / 180)) * 100,
                            y: Math.sin(i * 45 * (Math.PI / 180)) * 100,
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                    />
                ))}
            </div>
        </div>
    );
};

// --- BACKEND VISUAL: ABSTRACT NETWORK TOPOLOGY ---
export const HeroBackendVisual = () => {
    return (
        <div className="absolute inset-0 overflow-hidden bg-black/90 flex items-center justify-center opacity-60">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-transparent to-black z-10" />

            {/* Moved container UP slightly so it peeks over the card */}
            <div className="relative w-full h-full -translate-y-16 scale-150">
                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                        className="w-24 h-24 border-2 border-emerald-500/50 rounded-full flex items-center justify-center bg-emerald-900/30 backdrop-blur-md z-20 relative shadow-[0_0_50px_rgba(16,185,129,0.4)]"
                        animate={{ boxShadow: ["0 0 30px -5px rgba(16,185,129,0.4)", "0 0 60px -5px rgba(16,185,129,0.8)", "0 0 30px -5px rgba(16,185,129,0.4)"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <Server className="text-emerald-400 w-10 h-10" />
                    </motion.div>

                    {/* Concentric Rings - Larger to encompass card area */}
                    <motion.div
                        className="absolute inset-0 -m-12 border border-emerald-500/20 rounded-full"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.2, 0.6] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute inset-0 -m-24 border border-emerald-500/10 rounded-full"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.1, 0.4] }}
                        transition={{ duration: 5, delay: 1, repeat: Infinity }}
                    />
                </div>

                {/* Satellite Nodes - Spread wider to be visible around card */}
                <SatelliteNode angle={0} distance={200} delay={0} icon={<Globe size={18} />} label="CDN_EDGE" />
                <SatelliteNode angle={72} distance={200} delay={0.5} icon={<Database size={18} />} label="DB_CLUSTER" />
                <SatelliteNode angle={144} distance={200} delay={1} icon={<Share2 size={18} />} label="LOAD_BALANCER" />
                <SatelliteNode angle={216} distance={200} delay={1.5} icon={<Server size={18} />} label="API_GATEWAY" />
                <SatelliteNode angle={288} distance={200} delay={2} icon={<Database size={18} />} label="REDIS_CACHE" />
            </div>
        </div>
    );
};

const SatelliteNode = ({ angle, distance, delay, icon, label }: { angle: number, distance: number, delay: number, icon: React.ReactNode, label: string }) => {
    const x = Math.cos(angle * (Math.PI / 180)) * distance;
    const y = Math.sin(angle * (Math.PI / 180)) * distance;

    return (
        <div
            className="absolute top-1/2 left-1/2 z-0"
            style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
        >
            {/* Connection Line to Center */}
            <motion.div
                className="absolute top-1/2 left-1/2 h-[2px] bg-gradient-to-r from-emerald-500/40 via-emerald-500/10 to-transparent origin-left -z-10"
                style={{
                    width: distance,
                    transform: `rotate(${angle + 180}deg)`,
                    left: "50%",
                    top: "50%"
                }}
            >
                {/* Data Packet */}
                <motion.div
                    className="w-1.5 h-1.5 bg-emerald-300 rounded-full absolute top-0 shadow-[0_0_10px_#6ee7b7]"
                    animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: delay, ease: "linear" }}
                />
            </motion.div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: delay, duration: 0.5 }}
                className="flex flex-col items-center gap-2 group"
            >
                <div className="w-10 h-10 rounded-full bg-black/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)] z-20 backdrop-blur-sm group-hover:scale-110 transition-transform">
                    {icon}
                </div>
                <div className="text-[10px] font-mono text-emerald-400 font-bold tracking-wider bg-black/60 px-2 py-0.5 rounded border border-emerald-500/10">
                    {label}
                </div>
            </motion.div>
        </div>
    );
};
