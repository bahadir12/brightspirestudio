"use client";

import { motion } from "framer-motion";
import { Activity, Server, Shield, Wifi, Terminal, Play, Pause, Cpu } from "lucide-react";
import React, { useState, useEffect } from "react";

// --- VALIDATION & UTILS ---
const useTypingEffect = (text: string, speed: number = 30) => {
    const [displayedText, setDisplayedText] = useState("");
    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
        return () => clearInterval(timer);
    }, [text, speed]);
    return displayedText;
};

// --- VISUAL 1: THE SIGNAL (Terminal / Network) ---
export const SignalVisual = () => {
    const logs = [
        "> INIT_SECURE_CHANNEL...",
        "> HANDSHAKE_ACK: 0x4F2A",
        "> ESTABLISHING PEER_TO_PEER...",
        "> ROUTE: [RELAY_04] -> [CLIENT]",
        "> SIGNAL_STRENGTH: 98%",
        "> ENCRYPTION: AES-256-GCM",
        "> STATUS: CONNECTED"
    ];

    return (
        <div className="w-full h-full bg-[#0c0c0c] p-6 font-mono text-xs relative overflow-hidden flex flex-col">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            {/* Header */}
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="text-zinc-500 text-[10px]">SSR: ACTIVE</div>
            </div>

            {/* Logs */}
            <div className="space-y-2 z-10">
                {logs.map((log, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.4 }}
                        className={i === logs.length - 1 ? "text-green-400" : "text-zinc-400"}
                    >
                        {log}
                    </motion.div>
                ))}
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-4 bg-green-400"
                />
            </div>

            {/* Floating Connection Badge */}
            <motion.div
                className="absolute bottom-6 right-6 bg-green-900/20 border border-green-500/30 px-3 py-1.5 rounded-full flex items-center gap-2"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.5 }}
            >
                <Wifi size={12} className="text-green-400" />
                <span className="text-[10px] text-green-300">SECURE LINK</span>
            </motion.div>
        </div>
    );
};

// --- VISUAL 2: GOODTURN CLIENT (Mobile / Physics) ---
export const GoodTurnVisual = () => {
    return (
        <div className="w-full h-full bg-[#0A0A0A] relative flex items-center justify-center overflow-hidden">
            {/* Abstract Phone Frame */}
            <div className="w-[160px] h-[300px] border-[6px] border-zinc-800 rounded-[2rem] bg-black relative flex flex-col overflow-hidden shadow-2xl rotate-[-5deg]">
                {/* Dynamic Background */}
                <motion.div
                    className="absolute inset-0 opacity-30"
                    animate={{ background: "radial-gradient(circle at 50% 120%, #a855f7, transparent 70%)" }}
                />

                {/* Physics Particles */}
                <div className="absolute inset-0">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-cyan-400 rounded-full blur-[1px]"
                            style={{
                                width: 20 + Math.random() * 20,
                                height: 20 + Math.random() * 20
                            }}
                            animate={{
                                y: [250, 50, 250],
                                x: [Math.random() * 100, Math.random() * 100, Math.random() * 100],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>

                {/* UI Elements */}
                <div className="absolute top-4 left-4 right-4 h-2 bg-zinc-800 rounded-full opacity-50" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full" />

                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Cpu className="w-12 h-12 text-white opacity-80 mx-auto mb-2" />
                        </motion.div>
                        <p className="text-[8px] text-white/60 font-mono tracking-widest">HAPTIC ENGINE</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- VISUAL 3: SONAR DISCOVERY (Waveforms / Audio) ---
export const SonarVisual = () => {
    return (
        <div className="w-full h-full bg-zinc-900 relative flex flex-col items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-transparent" />

            {/* Waveform Bars */}
            <div className="flex items-end gap-1 h-32 mb-8 relative z-10">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-4 bg-gradient-to-t from-indigo-500 to-purple-400 rounded-full"
                        animate={{ height: ["20%", "80%", "30%", "100%", "40%"] }}
                        transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            repeatType: "mirror",
                            delay: i * 0.1,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Player Widget */}
            <div className="w-64 h-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center px-4 gap-4 z-10 shadow-lg">
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
                    <Play fill="white" size={16} className="ml-0.5" />
                </div>
                <div className="flex-1">
                    <div className="h-2 w-3/4 bg-white/20 rounded-full mb-2" />
                    <div className="h-1.5 w-1/2 bg-white/10 rounded-full" />
                </div>
            </div>

            {/* Scanlines */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50" />
        </div>
    );
};
