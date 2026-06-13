import { LovePassword } from "@/components/LovePassword";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";

import { Heart, ScanFace, Sparkles } from "lucide-react";

import { FloatingHearts } from "@/components/FloatingHearts";
import { LoveScanner } from "@/components/LoveScanner";
import { LoveGallery } from "@/components/LoveGallery";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [unlocked, setUnlocked] = useState(false);
  const [scannerOpen, setScannerOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const handleComplete = () => {
    setScannerOpen(false);

    setTimeout(() => {
      setRevealed(true);
    }, 800);
  };

  // PASSWORD SCREEN
  if (!unlocked) {
    return (
      <LovePassword
        onUnlock={() => setUnlocked(true)}
      />
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      <FloatingHearts />

      {!revealed && (
        <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 rounded-full border border-pink-500/20 bg-white/5 px-5 py-2 text-sm backdrop-blur-xl"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-pink-400" />
              AI LOVE EXPERIENCE
              <Sparkles className="h-4 w-4 text-pink-400" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl text-6xl font-black leading-tight md:text-8xl"
          >
            Rahul <span className="text-pink-400">&</span> Neha
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 max-w-2xl text-lg text-white/60"
          >
            A cinematic love memory made with emotions, distance,
            dreams and forever promises 💖
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setScannerOpen(true)}
            className="mt-12 flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-10 py-5 text-lg font-bold shadow-[0_0_80px_rgba(255,0,120,0.5)]"
          >
            <ScanFace className="h-5 w-5" />
            Begin Love Scan
          </motion.button>

          <div className="mt-16 text-sm text-white/30">
            Made with ❤️ by Neha
          </div>

        </section>
      )}

      <LoveScanner
        open={scannerOpen}
        onClose={() => setScannerOpen(false)}
        onComplete={handleComplete}
      />

      {revealed && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999999,
            overflowY: "auto",
            background: "#050505",
          }}
        >
          <LoveGallery />
        </div>
      )}
    </main>
  );
}