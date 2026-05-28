"use client";

export function FloatingHearts() {

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">

      {[...Array(20)].map((_, i) => (

        <div
          key={i}
          className="absolute animate-pulse text-pink-400/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${20 + Math.random() * 40}px`,
          }}
        >
          💖
        </div>

      ))}

    </div>
  );
}