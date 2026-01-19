"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Gamepad2, Layers, Zap } from "lucide-react";

const products = [
    {
        title: "Multiplayer Buff & Debuff System",
        subtitle: "Replication Framework",
        description: "A robust C++ replication framework for network-efficient status effects. Designed for competitive gameplay where state synchronization is critical.",
        image: "/assets/game/buff_system.jpg",
        link: "https://www.fab.com/tr/listings/da85975f-f985-4285-808c-1cf707026cc1",
        tags: ["Unreal C++", "Networking", "Gameplay Ability"],
        icon: Zap
    },
    {
        title: "Multiplayer Object Pooling",
        subtitle: "Performance Optimization",
        description: "High-performance actor recycling system eliminating runtime spawning costs. Essential for mobile and console optimization strategies.",
        image: "/assets/game/object_pooling.jpg",
        link: "https://www.fab.com/tr/listings/ee7212b8-1b5c-49c0-b346-6613977574e7",
        tags: ["Optimization", "Memory Management", "C++"],
        icon: Layers
    },
    {
        title: "Advanced Working Computer",
        subtitle: "Interactive Props",
        description: "A fully functional in-game computer system with browser, file management, and media capabilities. Taking immersion to the desktop level.",
        image: "/assets/game/advanced_computer.png",
        link: "https://www.fab.com/tr/listings/9cd10ffe-1e36-49f4-aaf0-6b16db3eb401",
        tags: ["UX", "Simulation", "Blueprints"],
        icon: Gamepad2
    }
];

export default function GamePage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto space-y-20">

                {/* Header */}
                <header className="space-y-6 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 text-primary"
                    >
                        <Gamepad2 className="w-8 h-8" />
                        <span className="font-mono text-sm tracking-widest uppercase">Brightspire Game Architecture</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white tracking-tight"
                    >
                        Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Flow State</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 leading-relaxed border-l-2 border-primary/20 pl-6"
                    >
                        We don't just build games; we architect high-performance replication systems and gameplay frameworks. Our tools power the next generation of multiplayer experiences.
                    </motion.p>
                </header>

                {/* Product Grid - Styled like Backend Page */}
                <div className="grid grid-cols-1 gap-12">
                    {products.map((product, idx) => (
                        <motion.a
                            key={product.title}
                            href={product.link}
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
                                    {product.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{product.title}</h2>
                                    <p className="text-primary font-mono tracking-wider text-sm uppercase">{product.subtitle}</p>
                                </div>

                                <p className="text-zinc-400 text-lg leading-relaxed">{product.description}</p>

                                <div className="pt-4 flex items-center gap-2 text-white font-medium group-hover:translate-x-2 transition-transform">
                                    <span>View on FAB Store</span>
                                    <ArrowUpRight className="w-4 h-4 text-primary" />
                                </div>
                            </div>

                            {/* Image Side */}
                            <div className="relative h-[300px] md:h-auto overflow-hidden order-1 md:order-2 border-b md:border-b-0 md:border-l border-white/5">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent md:bg-gradient-to-l" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </main>
    );
}
