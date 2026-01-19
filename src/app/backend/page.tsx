"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Server, Smartphone, Lock, Activity } from "lucide-react";
import { SignalVisual, GoodTurnVisual, SonarVisual } from "@/components/BackendVisuals";

const projects = [
    {
        title: "The Signal",
        subtitle: "Core Network & Android Node",
        description: "A reactive signaling backbone designed for censorship resistance. Spring WebFlux & WebRTC handling massive concurrency.",
        visual: <SignalVisual />,
        link: "https://kayihan.dev/backend",
        tags: ["Spring Boot", "WebRTC", "Kafka"],
        icon: Activity
    },
    {
        title: "GoodTurn Client",
        subtitle: "Physics/Haptics R&D",
        description: "A social engineering experiment gamifying altruism. Custom physics engine and haptic feedback loop.",
        visual: <GoodTurnVisual />,
        link: "https://kayihan.dev/mobile",
        tags: ["Flutter", "Kotlin", "Physics Engine"],
        icon: Smartphone
    },
    {
        title: "Sonar Discovery",
        subtitle: "Waveform Visualization",
        description: "Disrupts algorithmic monopolies via a 'Rapid Decision Mechanism'. Psycho-acoustic preference mapping.",
        visual: <SonarVisual />,
        link: "https://kayihan.dev/mobile",
        tags: ["Waveform Viz", "YouTube API", "Kotlin"],
        icon: Activity
    }
];

export default function BackendPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto space-y-20">

                {/* Header */}
                <header className="space-y-6 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 text-secondary"
                    >
                        <Server className="w-8 h-8" />
                        <span className="font-mono text-sm tracking-widest uppercase">Brightspire Systems Division</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white tracking-tight"
                    >
                        Systems that <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-pink-500">Scale</span> & Protect
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 leading-relaxed border-l-2 border-secondary/20 pl-6"
                    >
                        Architecting digital sovereignty with high performance mobile nodes and decentralized backend systems. Reliability is not a feature, it's the baseline.
                    </motion.p>
                </header>

                {/* Project Grid */}
                <div className="grid grid-cols-1 gap-12">
                    {projects.map((project, idx) => (
                        <motion.a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + idx * 0.15 }}
                            className="group relative grid md:grid-cols-2 rounded-3xl overflow-hidden border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/60 transition-colors"
                        >
                            {/* Content Side */}
                            <div className="p-8 md:p-12 flex flex-col justify-center space-y-6 order-2 md:order-1">
                                <div className="flex gap-2 flex-wrap mb-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h2>
                                    <p className="text-secondary font-mono tracking-wider text-sm uppercase">{project.subtitle}</p>
                                </div>

                                <p className="text-zinc-400 text-lg leading-relaxed">{project.description}</p>

                                <div className="pt-4 flex items-center gap-2 text-white font-medium group-hover:translate-x-2 transition-transform">
                                    <span>View Project on Kayihan.dev</span>
                                    <ArrowRight className="w-4 h-4 text-secondary" />
                                </div>
                            </div>

                            {/* Visual Side */}
                            <div className="relative h-[300px] md:h-auto overflow-hidden order-1 md:order-2 border-b md:border-b-0 md:border-l border-white/5 bg-black/50">
                                {/* Dynamic Component Rendering */}
                                {project.visual}

                                <div className="absolute inset-0 border-inset border-white/5 pointer-events-none" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </main>
    );
}
