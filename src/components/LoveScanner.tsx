"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface LoveScannerProps {
  open: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export function LoveScanner({
  open,
  onClose,
  onComplete,
}: LoveScannerProps) {

  const videoRef = useRef<HTMLVideoElement>(null);

  const [progress, setProgress] = useState(0);
  const [cameraReady, setCameraReady] = useState(false);

  useEffect(() => {
    if (!open) return;

    let stream: MediaStream;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;

          await videoRef.current.play();

          setCameraReady(true);
        }
      } catch (err) {
        console.error(err);
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [open]);

  useEffect(() => {
    if (!cameraReady) return;

    const interval = setInterval(() => {
      setProgress((prev) => {

        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onComplete();
          }, 2000);

          return 100;
        }

        return prev + 1;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [cameraReady, onComplete]);

  return (
    <AnimatePresence>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
        >

          <div className="relative h-full w-full overflow-hidden">

            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="h-full w-full object-cover opacity-70"
            />

            <div className="absolute inset-0 bg-black/40" />

            <motion.div
              animate={{
                y: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-0 top-0 h-40 w-full bg-gradient-to-b from-transparent via-pink-400/40 to-transparent blur-3xl"
            />

            <div className="absolute inset-0 border-[6px] border-pink-500/20" />

            <div className="absolute inset-0 flex flex-col items-center justify-center">

              <div className="mb-10 text-center">

                <div className="mb-4 text-sm tracking-[10px] text-pink-300">
                  AI FACE ANALYSIS
                </div>

                <h1 className="text-5xl font-black text-white md:text-7xl">
                  Scanning Love...
                </h1>

              </div>

              <div className="h-4 w-[320px] overflow-hidden rounded-full bg-white/10">

                <motion.div
                  className="h-full bg-gradient-to-r from-pink-500 to-rose-400"
                  animate={{
                    width: `${progress}%`,
                  }}
                />

              </div>

              <div className="mt-6 text-lg text-white/70">
                {progress < 30 && "Analyzing emotional frequency..."}
                {progress >= 30 && progress < 60 && "Comparing soul patterns..."}
                {progress >= 60 && progress < 90 && "Matching memories..."}
                {progress >= 90 && "Rahul & Neha identified 💖"}
              </div>

            </div>

          </div>

        </motion.div>
      )}

    </AnimatePresence>
  );
}