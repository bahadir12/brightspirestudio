"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] animate-pulse" />

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative z-10 p-12 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 text-center max-w-xl w-full"
            >
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
                    <Mail className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-3xl font-bold text-white mb-2">Initialize Handshake</h2>
                <p className="text-zinc-400 mb-8">Ready to build systems that matter? establishing a secure channel.</p>

                <div className="space-y-4">
                    <a
                        href="mailto:contact@brightspirestudio.com"
                        className="block w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-zinc-200 transition-colors"
                    >
                        contact@brightspirestudio.com
                    </a>

                    <a
                        href="https://discord.gg/9FrSGByTRJ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-4 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold transition-colors flex items-center justify-center gap-2 group"
                    >
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 127.14 96.36">
                            <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                        </svg>
                        Join our Discord
                    </a>
                    <p className="text-xs text-zinc-500 font-mono">Response time &lt; 24h</p>
                </div>
            </motion.div>
        </main>
    );
}
