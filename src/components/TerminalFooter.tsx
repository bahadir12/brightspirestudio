import { Terminal, Youtube, Instagram } from "lucide-react";

export function TerminalFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full py-8 border-t border-white/5 bg-black/50 backdrop-blur-sm mt-auto">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-600">
                <div className="flex items-center gap-2">
                    <Terminal size={14} className="text-primary" />
                    <span>Brightspire Studio System v{year}.1.0</span>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-zinc-500">Systems Operational</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="https://www.youtube.com/@BrightspireStudio" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-red-500 transition-colors">
                            <Youtube size={16} />
                        </a>
                        <a href="https://www.instagram.com/brightspirestudio/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-pink-500 transition-colors">
                            <Instagram size={16} />
                        </a>
                        <span className="hidden md:inline text-zinc-800">|</span>
                        <div>
                            Signed by <span className="text-zinc-400 font-bold inline-block animate-glitch hover:text-cyan-400 transition-colors cursor-default">BSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
