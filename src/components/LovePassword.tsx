import { motion } from "framer-motion";
import { Heart, Lock, Sparkles } from "lucide-react";
import { useState } from "react";

interface LovePasswordProps {
  onUnlock: () => void;
}

export function LovePassword({ onUnlock }: LovePasswordProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const LOVE_PASSWORD = "RahulNeha6426";

  const handleSubmit = () => {
    if (password === LOVE_PASSWORD) {
      onUnlock();
    } else {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-black">

      {/* Romantic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,20,147,0.25),transparent_70%)]" />

      {/* Floating Hearts */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400/30 text-2xl"
          initial={{
            y: window.innerHeight + 100,
            x: Math.random() * window.innerWidth,
            opacity: 0,
          }}
          animate={{
            y: -200,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="
          relative
          w-[92%]
          max-w-2xl
          rounded-[40px]
          border
          border-pink-500/20
          bg-white/5
          backdrop-blur-3xl
          px-10
          py-12
          text-center
          shadow-[0_0_80px_rgba(255,0,120,0.3)]
        "
      >

        {/* Heart */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mb-6 flex justify-center"
        >
          <Heart
            size={70}
            className="fill-pink-400 text-pink-400"
          />
        </motion.div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-black text-white">
          Our Love Vault
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-lg md:text-xl text-white/70 leading-relaxed">
          Some memories are too precious for the world.
          <br />
          Only <span className="text-pink-300 font-bold">Rahul & Neha</span>
          {" "}can unlock this forever story 💖
        </p>

        {/* Input */}
        <div className="relative mt-10">
          <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-400" />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Our Secret Love Code..."
            className="
              w-full
              rounded-3xl
              border
              border-pink-500/20
              bg-black/40
              py-5
              pl-14
              pr-5
              text-lg
              text-white
              outline-none
              placeholder:text-white/40
            "
          />
        </div>

        {/* Error */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-rose-400 text-lg"
          >
            😤 Wrong password! Only true lovers may enter.
          </motion.div>
        )}

        {/* Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 50px rgba(255,0,120,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          className="
            mt-8
            w-full
            rounded-3xl
            bg-gradient-to-r
            from-pink-500
            via-rose-500
            to-pink-500
            py-5
            text-xl
            font-bold
            text-white
          "
        >
          ✨ Unlock Our Forever ✨
        </motion.button>

        {/* Footer */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="mt-8 flex items-center justify-center gap-2 text-pink-300"
        >
          <Sparkles size={18} />
          Since the day our hearts met
          <Sparkles size={18} />
        </motion.div>

        {/* Romantic Quote */}
        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="mt-6 text-sm md:text-base text-white/40 italic"
        >
          "Distance only taught our hearts how to love deeper."
        </motion.p>

      </motion.div>
    </div>
  );
}