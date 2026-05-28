"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import memoryPic from "@/assets/memory.jpg";
import kissVideo from "@/assets/kiss.mp4";
import bgMusic from "@/assets/kaun_thuje.mp3";

export function LoveGallery() {

  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const yesScale = 1 + noCount * 0.18;
  const noScale = Math.max(0.35, 1 - noCount * 0.12);

  useEffect(() => {

    if (videoRef.current) {

      videoRef.current.playbackRate = 0.7;
    }

  }, []);

  return (
    <section
      className="love-wrapper"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.78),
            rgba(0,0,0,0.9)
          ),
          url(${memoryPic})
        `,
      }}
    >

      <audio
        ref={audioRef}
        src={bgMusic}
        loop
      />

      <div className="overlay-glow" />

      <div className="content-wrapper">

        <div className="hero-section">

          <div className="scan-tag">
            MATCH FOUND 💖
          </div>

          <h1 className="main-title">
            Rahul & Neha
          </h1>

          <p className="sub-title">
            Soulmate compatibility successfully detected ✨
          </p>

        </div>

        {!accepted ? (

          <div className="proposal-box">

            <div className="proposal-question">
              Will you love me forever? 🥺
            </div>

            <div className="proposal-buttons">

              <button
                className="yes-btn"
                style={{
                  transform: `scale(${yesScale})`,
                }}
                onClick={() => {

                  setAccepted(true);

                  if (audioRef.current) {

                    audioRef.current.volume = 0.5;

                    audioRef.current.play()
                      .then(() => {
                        console.log("Music playing 💖");
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }
                }}
              >
                YES 💖
              </button>

              <button
                className="no-btn"
                style={{
                  transform: `scale(${noScale})`,
                  opacity: noScale,
                }}
                onClick={() =>
                  setNoCount((prev) => prev + 1)
                }
              >
                NO 😒
              </button>

            </div>

            {noCount > 0 && (
              <div className="angry-text">
                😤 There is no option for u to say NO.
              </div>
            )}

          </div>

        ) : (

          <div className="accepted-section">

            <div className="love-explosion">
              💖 💋 💕 💞 💖
            </div>

            <div className="accepted-title">
              ACCESS GRANTED 💖
            </div>

            <div className="accepted-subtitle">
              Unlimited love successfully unlocked ✨
            </div>

            <div className="video-wrapper">

              <video
                ref={videoRef}
                src={kissVideo}
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                className="kiss-video"
              />

              <div className="video-overlay" />

              <div className="video-caption">
                Every moment with you
                <br />
                feels like home 💖
              </div>

            </div>

            <div className="memory-title">
              Our Late Night Memories 🌙
            </div>

            <div className="chat-container">

              <div className="chat left animate-chat1">
                Did you eat properly? 🥺
              </div>

              <div className="chat right animate-chat2">
                I miss you so much 😭💖
              </div>

              <div className="chat left animate-chat3">
                Sleep properly okay?
              </div>

              <div className="chat right animate-chat4">
                One day... forever together 💍
              </div>

              <div className="chat left animate-chat5">
                Goodnight pookie 😭💖
              </div>

            </div>

            <div className="wedding-section">

              <div className="future-tag">
                FUTURE PREDICTION 💍
              </div>

              <div className="wedding-title">
                Wedding Successfully Predicted
              </div>

              <div className="wedding-subtitle">
                Rahul & Neha — 2030 💖
              </div>

              <div className="timeline-box">

                <div className="timeline-item">
                  💖 2026 — More beautiful memories
                </div>

                <div className="timeline-item">
                  🌸 2027 — Endless night talks
                </div>

                <div className="timeline-item">
                  ✨ 2028 — Stronger love everyday
                </div>

                <div className="timeline-item">
                  💞 2029 — Wedding talks begin
                </div>

                <div className="timeline-item special">
                  💍 2030 — Wedding confirmed
                </div>

              </div>

            </div>

            <div className="forever-card">

              <div className="forever-title">
                Lifetime Love Warranty ♾️
              </div>

              <div className="forever-text">
                No return.
                <br />
                No exchange.
                <br />
                Only forever 💖
              </div>

            </div>

          </div>

        )}

      </div>

      <style>
        {`

        .love-wrapper {
          position: relative;

          min-height: 100vh;

          overflow: hidden;

          padding: 120px 20px;

          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .overlay-glow {
          position: absolute;

          inset: 0;

          background:
            radial-gradient(
              circle,
              rgba(255,105,180,0.12),
              transparent 70%
            );

          filter: blur(100px);
        }

        .content-wrapper {
          position: relative;

          z-index: 5;

          max-width: 1100px;

          margin: auto;
        }

        .hero-section {
          text-align: center;
        }

        .scan-tag {
          color: #ffb6d9;

          letter-spacing: 8px;

          font-size: 13px;
        }

        .main-title {
          margin-top: 25px;

          font-size: clamp(60px,9vw,120px);

          font-weight: 900;

          background:
            linear-gradient(
              to right,
              white,
              #ffb6d9
            );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .sub-title {
          margin-top: 20px;

          color: rgba(255,255,255,0.7);

          font-size: 24px;
        }

        .proposal-box {
          margin-top: 100px;

          padding: 60px 30px;

          border-radius: 40px;

          background: rgba(255,255,255,0.05);

          backdrop-filter: blur(20px);

          border: 1px solid rgba(255,255,255,0.08);

          text-align: center;
        }

        .proposal-question {
          font-size: clamp(36px,5vw,60px);

          font-weight: 800;

          color: white;
        }

        .proposal-buttons {
          display: flex;

          justify-content: center;

          gap: 24px;

          margin-top: 40px;

          flex-wrap: wrap;
        }

        .yes-btn {
          border: none;

          padding: 22px 48px;

          border-radius: 999px;

          background:
            linear-gradient(
              to right,
              #ff4d8d,
              #ff7eb3
            );

          color: white;

          font-size: 24px;

          font-weight: 800;

          cursor: pointer;

          transition: 0.3s ease;

          box-shadow:
            0 0 60px rgba(255,0,120,0.45);
        }

        .no-btn {
          border: none;

          padding: 20px 42px;

          border-radius: 999px;

          background: rgba(255,255,255,0.08);

          color: white;

          font-size: 20px;

          cursor: pointer;

          transition: 0.3s ease;
        }

        .angry-text {
          margin-top: 24px;

          color: #ff9dc5;

          font-size: 20px;
        }

        .accepted-section {
          margin-top: 80px;

          animation: fadeUp 1s ease;
        }

        .love-explosion {
          text-align: center;

          font-size: 60px;

          animation:
            floatLove 3s ease-in-out infinite;
        }

        .accepted-title {
          margin-top: 30px;

          text-align: center;

          font-size: clamp(50px,7vw,90px);

          font-weight: 900;

          background:
            linear-gradient(
              to right,
              white,
              #ffb6d9
            );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .accepted-subtitle {
          margin-top: 20px;

          text-align: center;

          color: rgba(255,255,255,0.7);

          font-size: 24px;
        }

        .video-wrapper {
          position: relative;

          margin-top: 80px;

          overflow: hidden;

          border-radius: 40px;
        }

        .kiss-video {
          width: 100%;

          max-height: 85vh;

          object-fit: contain;

          object-position: center;

          border-radius: 40px;

          display: block;

          transform: scale(0.92);

          filter:
            brightness(0.92)
            contrast(1.05)
            saturate(1.08);

          animation:
            dreamyZoom 14s ease-in-out infinite alternate;
        }

        .video-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(0,0,0,0.7),
              transparent
            );
        }

        .video-caption {
          position: absolute;

          left: 30px;
          bottom: 30px;

          color: white;

          font-size: clamp(20px, 4vw, 52px);

          font-weight: 800;

          line-height: 1.15;

          max-width: 85%;

          z-index: 5;

          text-shadow:
            0 4px 20px rgba(0,0,0,0.7);

          animation:
            fadeUp 1.5s ease;
        }

        .memory-title {
          margin-top: 120px;

          text-align: center;

          font-size: clamp(42px,6vw,72px);

          font-weight: 900;
        }

        .chat-container {
          display: flex;

          flex-direction: column;

          gap: 30px;

          margin-top: 70px;
        }

        .chat {
          max-width: 75%;

          padding: 24px 30px;

          border-radius: 32px;

          font-size: 24px;

          font-weight: 600;

          opacity: 0;

          transform: translateY(30px);
        }

        .left {
          align-self: flex-start;

          background: rgba(255,255,255,0.08);

          backdrop-filter: blur(20px);
        }

        .right {
          align-self: flex-end;

          background:
            linear-gradient(
              to right,
              #ff4d8d,
              #ff7eb3
            );
        }

        .animate-chat1 {
          animation: showChat 1s ease forwards;
          animation-delay: 1s;
        }

        .animate-chat2 {
          animation: showChat 1s ease forwards;
          animation-delay: 3s;
        }

        .animate-chat3 {
          animation: showChat 1s ease forwards;
          animation-delay: 5s;
        }

        .animate-chat4 {
          animation: showChat 1s ease forwards;
          animation-delay: 7s;
        }

        .animate-chat5 {
          animation: showChat 1s ease forwards;
          animation-delay: 9s;
        }

        .wedding-section {
          margin-top: 140px;

          text-align: center;
        }

        .future-tag {
          color: #ffb6d9;

          letter-spacing: 8px;

          font-size: 13px;
        }

        .wedding-title {
          margin-top: 20px;

          font-size: clamp(46px,7vw,90px);

          font-weight: 900;
        }

        .wedding-subtitle {
          margin-top: 20px;

          color: rgba(255,255,255,0.75);

          font-size: 26px;
        }

        .timeline-box {
          margin-top: 70px;

          display: flex;

          flex-direction: column;

          gap: 26px;

          text-align: left;
        }

        .timeline-item {
          padding: 28px 32px;

          border-radius: 30px;

          background: rgba(255,255,255,0.06);

          backdrop-filter: blur(20px);

          font-size: 24px;
        }

        .special {
          background:
            linear-gradient(
              to right,
              rgba(255,0,120,0.25),
              rgba(255,105,180,0.15)
            );

          color: #ffb6d9;

          font-weight: 800;
        }

        .forever-card {
          margin-top: 120px;

          padding: 80px 30px;

          border-radius: 40px;

          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,0.08),
              rgba(255,105,180,0.08)
            );

          text-align: center;
        }

        .forever-title {
          font-size: clamp(46px,7vw,80px);

          font-weight: 900;
        }

        .forever-text {
          margin-top: 30px;

          color: rgba(255,255,255,0.78);

          font-size: 28px;

          line-height: 1.7;
        }

        @keyframes fadeUp {

          from {
            opacity: 0;
            transform: translateY(40px);
          }

          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }

        @keyframes floatLove {

          0%,100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-14px);
          }
        }

        @keyframes showChat {

          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }

        @keyframes dreamyZoom {

          0% {
            transform:
              scale(0.92)
              translateY(0px);
          }

          100% {
            transform:
              scale(1)
              translateY(-8px);
          }
        }

        @media (max-width: 768px) {

          .chat {
            max-width: 90%;

            font-size: 18px;
          }

          .proposal-buttons {
            flex-direction: column;
          }

          .timeline-item {
            font-size: 18px;
          }

          .video-caption {
            left: 20px;
            bottom: 20px;
          }
        }

        `}
      </style>

    </section>
  );
}