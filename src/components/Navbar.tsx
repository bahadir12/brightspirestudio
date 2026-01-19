"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Gamepad2, Server, Terminal, Mail } from "lucide-react";

const navItems = [
    { name: "Game", href: "/game", icon: Gamepad2 },
    { name: "Backend", href: "/backend", icon: Server },
    { name: "Blog", href: "/blog", icon: Terminal },
    { name: "Contact", href: "/contact", icon: Mail },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
        >
            <nav className="w-full bg-black/50 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between pointer-events-auto shadow-2xl">
                <Link href="/" className="flex items-center gap-3 group">
                    <span className="font-bold text-lg tracking-tight font-mono">
                        Brightspire Studio<span className="text-primary animate-pulse">_</span>
                    </span>
                </Link>

                <ul className="flex items-center gap-1 md:gap-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:bg-white/5",
                                        isActive ? "text-white" : "text-zinc-400 hover:text-white"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <Icon className="w-4 h-4" />
                                    <span className="hidden sm:block">{item.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </motion.header>
    );
}
