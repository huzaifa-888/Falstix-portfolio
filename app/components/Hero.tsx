"use client";

import { useEffect, useRef, useState } from "react";

interface HeroProps {
  onNavigate: (page: string) => void;
}

const ROLES = [
  "Web Development",
  "App Development",
  "Digital Marketing",
  "UI/UX Design",
  "Creative Solutions",
];

const PINK = "#f72585"; // magenta accent — matches the Projects page theme

export default function Hero({ onNavigate }: HeroProps) {
  const typed = useTyping(ROLES);

  return (
    <div
      className="hero-wrap"
      style={{
        position: "relative",
        background: "var(--bg)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Ambient glow blobs */}
      <div
        aria-hidden
        className="hero-glow-blob"
        style={{
          position: "absolute",
          top: "-160px",
          left: "-160px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          pointerEvents: "none",
          background:
            "radial-gradient(closest-side, rgba(247,37,133,0.35), transparent 70%)",
          animation: "glow 6s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden
        className="hero-glow-blob"
        style={{
          position: "absolute",
          top: "33%",
          right: "-160px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          pointerEvents: "none",
          background:
            "radial-gradient(closest-side, rgba(247,37,133,0.22), transparent 70%)",
          animation: "glow 6s ease-in-out infinite 2s",
        }}
      />

      {/* Hero */}
      <main
        className="hero-inner"
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px 20px",
          flex: 1,
        }}
      >
        {/* Text content (banner section removed) */}
        <div
          className="hero-text"
          style={{ width: "100%", textAlign: "center" }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 22px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              marginBottom: "18px",
              fontSize: "0.85rem",
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: PINK,
                display: "inline-block",
                animation: "pulseDot 1.6s ease-in-out infinite",
              }}
            />
            Now Onboarding New Clients
          </div>

          {/* Heading */}
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3.8rem)",
              lineHeight: 1.05,
              fontWeight: 900,
              letterSpacing: "-2px",
              marginBottom: "16px",
              wordBreak: "break-word",
            }}
          >
            BUILD YOUR <span style={{ color: PINK }}>FUTURE</span>
            <br />
            WITH{" "}
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: `2px ${PINK}`,
              }}
            >
              FALESTIX
            </span>
          </h1>

          {/* Typing */}
          <div
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.6rem)",
              fontWeight: 700,
              marginBottom: "16px",
              minHeight: "36px",
            }}
          >
            {typed}
            <span
              style={{
                display: "inline-block",
                width: "2px",
                height: "1em",
                background: PINK,
                marginLeft: "2px",
                verticalAlign: "middle",
                animation: "blink 1s step-start infinite",
              }}
            />
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
              lineHeight: 1.7,
              maxWidth: "620px",
              margin: "0 auto 24px",
              opacity: 0.85,
            }}
          >
            Falestix is a full-service digital agency helping brands grow
            through powerful websites, apps, and creative campaigns. Our team
            turns bold ideas into real results, combining cutting-edge
            technology with sharp design to give your business the edge it
            deserves.
          </p>

          {/* CTAs */}
          <div
            className="hero-btns"
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "28px",
            }}
          >
            <button
              onClick={() => onNavigate("projects")}
              style={{
                padding: "13px 28px",
                fontSize: "0.95rem",
                borderRadius: "14px",
                border: "none",
                background: PINK,
                color: "#000",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 20px 45px rgba(247,37,133,0.3)",
              }}
            >
              View Our Work
            </button>
            <button
              onClick={() => onNavigate("reviews")}
              style={{
                padding: "13px 28px",
                fontSize: "0.95rem",
                borderRadius: "14px",
                background: "transparent",
                border: "2px solid rgba(247,37,133,0.45)",
                color: PINK,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Client Reviews
            </button>
            <button
              onClick={() => onNavigate("services")}
              style={{
                padding: "13px 28px",
                fontSize: "0.95rem",
                borderRadius: "14px",
                background: "transparent",
                border: "2px solid rgba(255,255,255,0.2)",
                color: "#fff",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Services
            </button>
          </div>

          {/* Stats */}
          <div
            className="hero-stats"
            style={{
              display: "flex",
              gap: "40px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              { n: "30+", l: "Projects Delivered" },
              { n: "10", l: "Team Members" },
              { n: "100%", l: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.l}>
                <div style={{ fontSize: "1.9rem", fontWeight: 900 }}>
                  {s.n}
                </div>
                <div
                  style={{
                    opacity: 0.7,
                    marginTop: "4px",
                    fontSize: "0.85rem",
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <style jsx>{`
        .hero-wrap {
          height: 100vh;
          max-height: 100vh;
          overflow: hidden;
          padding-top: 68px;
        }
        .hero-inner {
          min-height: 0;
          overflow: hidden;
        }
        @keyframes glow {
          0%,
          100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.08);
          }
        }
        @keyframes blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }
        @keyframes pulseDot {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(247, 37, 133, 0.5);
          }
          50% {
            box-shadow: 0 0 0 6px rgba(247, 37, 133, 0);
          }
        }
        /* ============ MOBILE: smooth, scrollable, stacked layout ============ */
        @media (max-width: 900px) {
          .hero-wrap {
            height: auto;
            max-height: none;
            min-height: 100vh;
            overflow: visible;
          }
          .hero-inner {
            flex-direction: column;
            overflow: visible;
            padding-top: 10px !important;
            padding-bottom: 40px !important;
            gap: 32px !important;
          }
          .hero-text {
            text-align: center !important;
          }
          .hero-btns,
          .hero-stats {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-inner {
            gap: 24px !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .hero-stats {
            gap: 24px !important;
          }
        }

        /* The two 600-700px glow blobs animate forever with a soft-edge
           radial-gradient; on mobile GPUs that constant repaint is a big
           contributor to janky scrolling, so shrink and freeze them. */
        @media (max-width: 768px) {
          .hero-glow-blob {
            width: 320px !important;
            height: 320px !important;
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const idx = useRef(0);
  const dir = useRef<"type" | "pause" | "del">("type");
  const pos = useRef(0);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[idx.current];
      if (dir.current === "type") {
        pos.current += 1;
        setText(word.slice(0, pos.current));
        if (pos.current === word.length) {
          dir.current = "pause";
          t = setTimeout(tick, 1400);
          return;
        }
        t = setTimeout(tick, 70);
      } else if (dir.current === "pause") {
        dir.current = "del";
        t = setTimeout(tick, 200);
      } else {
        pos.current -= 1;
        setText(word.slice(0, pos.current));
        if (pos.current === 0) {
          dir.current = "type";
          idx.current = (idx.current + 1) % words.length;
          t = setTimeout(tick, 300);
          return;
        }
        t = setTimeout(tick, 40);
      }
    };
    t = setTimeout(tick, 300);
    return () => clearTimeout(t);
  }, [words]);

  return text;
}