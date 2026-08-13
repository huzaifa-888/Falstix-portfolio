"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Shimmer placeholder — dark themed, no extra request
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#111" offset="20%"/>
      <stop stop-color="#1e1e1e" offset="50%"/>
      <stop stop-color="#111" offset="70%"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#111"/>
  <rect id="r" width="${w}" height="${h}" fill="url(#g)"/>
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.2s" repeatCount="indefinite"/>
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(unescape(encodeURIComponent(str)));

const blurDataURL = `data:image/svg+xml;base64,${toBase64(shimmer(340, 220))}`;

const services = [
  { img: "/web.jpg", title: "Website Development", tag: "Web", features: ["React & Next.js Development", "Tailwind CSS Styling", "SEO Optimized Structure", "REST API Integration", "Responsive All Devices", "Page Speed Optimization"], tech: ["React", "Next.js", "Tailwind", "Node.js", "MongoDB"], desc: "We build fast, modern, and fully responsive websites using the latest technologies like React and Next.js. From landing pages to full-stack web applications, we deliver clean code and stunning design tailored to your business goals." },
  { img: "/w2.jpg", title: "WordPress Websites", tag: "WordPress", features: ["Custom Theme Development", "WooCommerce E-Commerce", "Plugin Development", "Speed & SEO Optimization", "Landing Page Design", "Maintenance & Support"], tech: ["WordPress", "WooCommerce", "PHP", "Elementor", "ACF"], desc: "From blogs to full e-commerce stores, we craft powerful WordPress websites with custom themes and plugins. Our WordPress solutions are fast, secure, and easy to manage." },
  { img: "/mp.jpg", title: "LMS / CRM / AI Solutions", tag: "Business", features: ["Learning Management System", "CRM Pipeline & Lead Tracking", "AI Chatbot Integration", "Business Automation", "Custom Admin Dashboards", "Analytics & Reporting"], tech: ["React", "Node.js", "OpenAI", "PostgreSQL", "Stripe"], desc: "Transform your business with smart software — LMS platforms for online courses, CRM systems to manage clients and leads, and AI-powered automation." },
  { img: "/App.jpg", title: "App Development", tag: "Mobile", features: ["Native Android Development", "Native iOS Development", "Hybrid App (React Native)", "iPhone App Development", "Firebase Backend", "App Store Publishing"], tech: ["React Native", "Swift", "Kotlin", "Firebase", "Expo"], desc: "We build high-performance mobile apps for Android and iOS — from native apps to hybrid solutions using React Native." },
  { img: "/flu.png", title: "Flutter Apps", tag: "Cross-Platform", features: ["Android & iOS from One Codebase", "Firebase Integration", "REST API Support", "Offline-First Architecture", "Beautiful UI with Dart", "Play Store & App Store Ready"], tech: ["Flutter", "Dart", "Firebase", "REST API", "GetX"], desc: "Build beautiful cross-platform mobile apps with Flutter — one codebase that runs perfectly on Android and iOS." },
  { img: "/desk.jpg", title: "Desktop Applications", tag: "Desktop", features: ["Windows & macOS Apps", "Electron.js Development", "Python Desktop Tools", "POS Systems", "Business Automation Tools", "Database Integration"], tech: ["Electron", "Python", "Tkinter", "SQLite", "React"], desc: "We build powerful desktop applications for Windows and macOS using Electron and Python." },
  { img: "/v2.jpg", title: "Video Editing", tag: "Media", features: ["YouTube Video Editing", "Shorts & Reels Editing", "Vlog Production", "Podcast Editing & Visuals", "Motion Graphics & Intros", "Color Grading & Sound Mix"], tech: ["Premiere Pro", "After Effects", "DaVinci", "Audition", "Photoshop"], desc: "From YouTube vlogs to viral Shorts and Reels, we edit videos that capture attention and grow your audience." },
  { img: "/addmar.png", title: "Digital Marketing & Ads", tag: "Marketing", features: ["Facebook & Instagram Ads", "Google Ads Campaigns", "SEO & Content Strategy", "Social Media Management", "Lead Generation Funnels", "Analytics & Reporting"], tech: ["Meta Ads", "Google Ads", "SEO", "Canva", "Analytics"], desc: "Grow your business with targeted digital marketing — Facebook, Instagram, and Google Ads designed to maximize ROI." },
  { img: "/s8.jpg", title: "AI Agents", tag: "AI Agents", features: ["Custom AI Support Agents", "Lead Qualification Agents", "Workflow & Task Automation", "AI Voice & Chat Assistants", "API & CRM Integrations", "Multi-Step Reasoning Agents"], tech: ["OpenAI", "LangChain", "Python", "Vector DB", "n8n"], desc: "We design and deploy autonomous AI agents that handle support, sales, and research around the clock — connected directly to your tools, trained on your data, and built to actually get work done." },
];

const tagColors = {
  Web: { bg: "rgba(99,179,237,0.12)", text: "#63b3ed", border: "rgba(99,179,237,0.3)" },
  WordPress: { bg: "rgba(129,140,248,0.12)", text: "#818cf8", border: "rgba(129,140,248,0.3)" },
  Business: { bg: "rgba(52,211,153,0.12)", text: "#34d399", border: "rgba(52,211,153,0.3)" },
  Mobile: { bg: "rgba(251,191,36,0.12)", text: "#fbbf24", border: "rgba(251,191,36,0.3)" },
  "Cross-Platform": { bg: "rgba(244,114,182,0.12)", text: "#f472b6", border: "rgba(244,114,182,0.3)" },
  Desktop: { bg: "rgba(251,146,60,0.12)", text: "#fb923c", border: "rgba(251,146,60,0.3)" },
  Media: { bg: "rgba(167,139,250,0.12)", text: "#a78bfa", border: "rgba(167,139,250,0.3)" },
  Marketing: { bg: "rgba(34,211,238,0.12)", text: "#22d3ee", border: "rgba(34,211,238,0.3)" },
  "AI Agents": { bg: "rgba(45,255,196,0.12)", text: "#2dffc4", border: "rgba(45,255,196,0.3)" },
};

/* ---------------- scroll-reveal wrapper ---------------- */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------------- check icon for feature list ---------------- */
function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="rgba(255,45,141,0.14)" />
      <path
        d="M4.8 8.3 6.7 10.2 11.2 5.7"
        stroke="#ff4da6"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Services() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        .services-wrapper {
          background: var(--bg);
          min-height: 100vh;
          padding-top: 80px;
          position: relative;
          overflow: hidden;
        }

        /* ambient aurora glow, matches site's pink identity */
        .aurora {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .aurora span {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          opacity: 0.5;
        }
        .aurora span:nth-child(1) {
          width: 520px; height: 520px;
          top: -220px; left: -160px;
          background: radial-gradient(circle, #ff2d8d, transparent 70%);
          animation: drift1 22s ease-in-out infinite;
        }
        .aurora span:nth-child(2) {
          width: 460px; height: 460px;
          top: 120px; right: -180px;
          background: radial-gradient(circle, #7c3aed, transparent 70%);
          animation: drift2 26s ease-in-out infinite;
        }
        .aurora span:nth-child(3) {
          width: 380px; height: 380px;
          bottom: -160px; left: 30%;
          background: radial-gradient(circle, #ff4da6, transparent 70%);
          animation: drift1 18s ease-in-out infinite reverse;
        }
        @keyframes drift1 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(40px,30px) scale(1.08); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-35px,25px) scale(1.05); }
        }
        @media (prefers-reduced-motion: reduce) {
          .aurora span { animation: none !important; }
        }
        /* Heavy blur + continuous animation is expensive to repaint on phones
           and was the main cause of stuttering scroll on mobile. Shrink the
           blur radius and stop the animation loop on small screens. */
        @media (max-width: 768px) {
          .aurora span { filter: blur(60px); animation: none !important; }
        }

        /* ---------- hero ---------- */
        .services-hero {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 84px 24px 64px;
          max-width: 780px;
          margin: 0 auto;
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #ff4da6;
          border: 1px solid rgba(255,45,141,0.3);
          background: rgba(255,45,141,0.06);
          padding: 7px 18px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          margin-bottom: 26px;
          opacity: 0;
          animation: fadeUp 0.7s ease forwards;
        }
        .hero-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #ff4da6;
          box-shadow: 0 0 8px #ff4da6;
        }
        .hero-title {
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 800;
          color: white;
          letter-spacing: -1.5px;
          line-height: 1.08;
          opacity: 0;
          animation: fadeUp 0.7s ease 0.1s forwards;
        }
        .hero-title span {
          background: linear-gradient(135deg, #ff2d8d, #ff4da6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-sub {
          margin-top: 20px;
          color: #94a3b8;
          font-size: clamp(15px, 1.6vw, 18px);
          line-height: 1.7;
          opacity: 0;
          animation: fadeUp 0.7s ease 0.2s forwards;
        }
        .divider-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, #ff2d8d, transparent);
          margin: 30px auto 0;
          opacity: 0;
          animation: fadeUp 0.7s ease 0.3s forwards, growLine 1s ease 0.4s forwards;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes growLine {
          from { width: 0; }
          to { width: 60px; }
        }

        /* ---------- grid ---------- */
        .services-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(340px, 100%), 1fr));
          gap: 26px;
          max-width: 1200px;
          margin: auto;
          padding: 24px 24px 100px;
        }

        /* ---------- reveal utility ---------- */
        .reveal {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1; transform: none; transition: none; }
          .hero-eyebrow, .hero-title, .hero-sub, .divider-line { opacity: 1; animation: none; }
        }

        /* ---------- card ---------- */
        .service-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          overflow: hidden;
          height: 100%;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1),
                      border-color 0.4s ease,
                      box-shadow 0.4s ease,
                      background 0.4s ease;
        }
        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255,45,141,0.35);
          background: rgba(255,255,255,0.045);
          box-shadow: 0 24px 60px rgba(255,45,141,0.14), 0 8px 24px rgba(0,0,0,0.4);
        }

        .card-image-wrap {
          position: relative;
          width: 100%;
          height: 220px;
          background: #111;
          overflow: hidden;
        }
        .card-image-wrap img {
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1), filter 0.6s ease;
        }
        .service-card:hover .card-image-wrap img {
          transform: scale(1.08);
          filter: brightness(0.75);
        }
        .card-image-fade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 55%, rgba(10,10,10,0.9) 100%);
          pointer-events: none;
        }

        .card-tag {
          position: absolute;
          top: 14px;
          right: 14px;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          z-index: 1;
          backdrop-filter: blur(6px);
          transition: transform 0.4s ease;
        }
        .service-card:hover .card-tag {
          transform: translateY(-2px);
        }

        .card-body { padding: 26px 24px 28px; color: white; }
        .card-title {
          margin-bottom: 12px;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -0.3px;
          position: relative;
          display: inline-block;
        }
        .card-title::after {
          content: "";
          position: absolute;
          left: 0; bottom: -6px;
          width: 28px; height: 2px;
          background: linear-gradient(90deg, #ff2d8d, transparent);
          transition: width 0.4s ease;
        }
        .service-card:hover .card-title::after { width: 100%; }

        .card-desc {
          color: #94a3b8;
          margin-bottom: 20px;
          font-size: 14.5px;
          line-height: 1.7;
        }

        .features-grid {
          display: grid;
          gap: 9px;
          margin-bottom: 22px;
        }
        .feature-row {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13.5px;
          color: #cbd5e1;
        }

        .tech-row { display: flex; flex-wrap: wrap; gap: 8px; }
        .tech-pill {
          background: rgba(255,45,141,0.08);
          color: #ff2d8d;
          padding: 5px 12px;
          border-radius: 999px;
          font-size: 12.5px;
          font-weight: 500;
          border: 1px solid rgba(255,45,141,0.15);
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
        }
        .service-card:hover .tech-pill {
          border-color: rgba(255,45,141,0.35);
        }
        .tech-pill:hover {
          background: rgba(255,45,141,0.16);
          transform: translateY(-2px);
        }
      `}</style>

      <div className="services-wrapper">
        <div className="aurora" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="services-hero">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            What We Offer
          </div>
          <h1 className="hero-title">
            Our <span>Services</span>
          </h1>
          <p className="hero-sub">
            End-to-end digital solutions — from websites and apps to AI-powered
            automation — built with the tools and craft your business deserves.
          </p>
          <div className="divider-line" />
        </div>

        <div className="services-grid">
          {services.map((s, i) => {
            const tc = tagColors[s.tag as keyof typeof tagColors] || tagColors.Web;
            return (
              <Reveal key={i} delay={(i % 3) * 90}>
                <div className="service-card">
                  <div className="card-image-wrap">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                      style={{ objectFit: "cover" }}
                      priority={i < 2}
                      loading={i < 2 ? "eager" : "lazy"}
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      quality={75}
                    />
                    <div className="card-image-fade" />
                    <div
                      className="card-tag"
                      style={{ background: tc.bg, color: tc.text, border: `1px solid ${tc.border}` }}
                    >
                      {s.tag}
                    </div>
                  </div>

                  <div className="card-body">
                    <h3 className="card-title">{s.title}</h3>
                    <p className="card-desc">{s.desc}</p>
                    <div className="features-grid">
                      {s.features.map((f, fi) => (
                        <div className="feature-row" key={fi}>
                          <CheckIcon />
                          {f}
                        </div>
                      ))}
                    </div>
                    <div className="tech-row">
                      {s.tech.map((t, ti) => (
                        <span className="tech-pill" key={ti}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </>
  );
}