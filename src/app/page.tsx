"use client";

import { SplitHero } from "@/components/SplitHero";
import { IntroSection } from "@/components/IntroSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Intro Section */}
      <IntroSection />

      {/* Split Hero Section */}
      <SplitHero />

      {/* Philosophy Section */}
      <div className="relative z-10 space-y-32 py-32 overflow-hidden">

        {/* Game Philosophy */}
        <PhilosophySection
          side="game"
          title="Decoupling Visuals from Network Tick"
          quote='"Trust the math, not the ping."'
          constraint="We were building a high velocity multiplayer traversal system where players vault over obstacles at speed. The bottleneck was server authority vs. client fluidity. The standard replication method (syncing transforms) caused severe rubber banding for clients with >50ms latency, breaking the player's 'flow state' during complex animations."
          decision="Instead of brute forcing higher NetUpdateFrequency (which increases bandwidth cost), I architected a Deterministic Intent System. We shifted the replication model from 'Result Based' to 'Intent Based.' The client no longer streams their position during the vault. Instead, they send a single, lightweight RPC containing the Anchor Point and Warp Target. The server then executes the exact same motion warping algorithm locally, guaranteeing the math aligns without needing constant network updates."
          outcome="The system reduced actor replication bandwidth by 60% during traversal actions. It achieved frame perfect alignment between Client and Server, proving that in fast paced mechanics, prediction is cheaper and cleaner than correction."
          tags={["Unreal Engine", "Replication", "C++", "Networking"]}
        />

        {/* Backend Philosophy */}
        <PhilosophySection
          side="backend"
          title="Designing for Failure in Physical Systems"
          quote='"When reliability matters more than elegance."'
          constraint="We were scaling a distributed platform requiring real time interaction with physical hardware. The bottleneck was network reliability. Even small connectivity drops translated into hard user failures at the moment of action."
          decision="Instead of adding complex retry logic (which would only increase system fragility), I engineered a proximity based fallback layer. We shifted the 'source of truth' to the physical edge. If the cloud failed, the app leveraged local hardware verification (implemented via NFC) to authorize access securely."
          outcome="The system maintained high availability during critical growth phases. It proved that sometimes the best code is the code you write to eventually delete."
          tags={["Distributed Systems", "IoT", "Fallbacks", "Reliability"]}
        />

      </div>

    </main>
  );
}

function PhilosophySection({
  side, title, quote, constraint, decision, outcome, tags
}: {
  side: "game" | "backend",
  title: string,
  quote: string,
  constraint: string,
  decision: string,
  outcome: string,
  tags: string[]
}) {
  const isGame = side === "game";
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      {/* Ambient Glow */}
      <div className={cn(
        "absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 -z-10",
        isGame ? "bg-primary left-0" : "bg-secondary right-0"
      )} />

      <div className={cn("space-y-8", isGame ? "md:order-1" : "md:order-2")}>
        <motion.div style={{ opacity, y }} className="space-y-6">
          <div className="space-y-2">
            <span className={cn(
              "text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full border",
              isGame ? "text-primary border-primary/20 bg-primary/5" : "text-secondary border-secondary/20 bg-secondary/5"
            )}>
              {isGame ? "Unreal Architecture" : "System Resilience"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">{title}</h2>
            <p className={cn(
              "text-xl italic font-serif",
              isGame ? "text-primary/80" : "text-secondary/80"
            )}>{quote}</p>
          </div>

          <div className="grid gap-6 text-zinc-400 leading-relaxed">
            <div>
              <h4 className="text-white font-mono text-sm mb-2 uppercase tracking-wider">The Constraint</h4>
              <p>{constraint}</p>
            </div>
            <div>
              <h4 className="text-white font-mono text-sm mb-2 uppercase tracking-wider">The Decision</h4>
              <p>{decision}</p>
            </div>
            <div>
              <h4 className="text-white font-mono text-sm mb-2 uppercase tracking-wider">The Outcome</h4>
              <p>{outcome}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Visual/Code Block Side */}
      <div className={cn("hidden md:block", isGame ? "md:order-2" : "md:order-1")}>
        <div className="relative group">
          <div className={cn(
            "absolute -inset-1 rounded-2xl opacity-20 blur transition duration-500",
            isGame ? "bg-gradient-to-r from-cyan-600 to-blue-600" : "bg-gradient-to-r from-purple-600 to-pink-600"
          )} />
          <div className="relative rounded-xl bg-black/80 border border-white/10 p-6 font-mono text-sm overflow-hidden text-zinc-300 shadow-2xl">
            {/* Fake Code / Terminal Visual */}
            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-xs text-zinc-500 ml-2">{isGame ? "movement.cpp" : "fallback_strategy.ts"}</span>
            </div>

            {isGame ? (
              <pre className="overflow-x-auto text-xs md:text-sm">
                <code>
                  <span className="text-purple-400">void</span> <span className="text-blue-400">UMovementComponent</span>::<span className="text-yellow-300">ExecuteVault</span>(<span className="text-purple-400">const</span> FVector& Target) {'{'}
                  <span className="text-zinc-500">// Deterministic execution based on Intent</span>
                  <span className="text-purple-400">if</span> (!<span className="text-blue-400">HasAuthority</span>()) {'{'}
                  <span className="text-zinc-500">// Client predicts immediately</span>
                  <span className="text-yellow-300">StartMotionWarp</span>(Target);
                  <span className="text-blue-400">Server_SendVaultIntent</span>(Target);
                  <span className="text-purple-400">return</span>;
                  {'}'}

                  <span className="text-zinc-500">// Server validates math, not transform history</span>
                  <span className="text-purple-400">if</span> (<span className="text-yellow-300">ValidateReachability</span>(Target)) {'{'}
                  <span className="text-yellow-300">Multicast_ConfirmVault</span>(Target);
                  {'}'}
                  {'}'}
                </code>
              </pre>
            ) : (
              <pre className="overflow-x-auto text-xs md:text-sm">
                <code>
                  <span className="text-purple-400">async function</span> <span className="text-yellow-300">authorizeAccess</span>(user, resource) {'{'}
                  <span className="text-purple-400">try</span> {'{'}
                  <span className="text-zinc-500">// Attempt cloud verification</span>
                  <span className="text-purple-400">return await</span> <span className="text-blue-400">Cloud</span>.<span className="text-yellow-300">verify</span>(user.id);
                  {'}'} <span className="text-purple-400">catch</span> (networkError) {'{'}

                  <span className="text-zinc-500">// Fallback to Edge Verification (NFC)</span>
                  <span className="text-pink-400">logger</span>.<span className="text-yellow-300">warn</span>(<span className="text-green-300">"Cloud unreachable. Engaging Local Protocol."</span>);

                  <span className="text-purple-400">const</span> localKey = <span className="text-blue-400">HardwareSecurity</span>.<span className="text-yellow-300">readSecureElement</span>();
                  <span className="text-purple-400">return</span> <span className="text-blue-400">Cryptography</span>.<span className="text-yellow-300">validateSignature</span>(localKey, user.hash);
                  {'}'}
                  {'}'}
                </code>
              </pre>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-zinc-400 border border-white/5">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
