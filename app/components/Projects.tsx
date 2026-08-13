"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Smartphone,
  Globe,
  Film,
  Megaphone,
  ArrowUpRight,
  Play,
  ExternalLink,
  Bot,
} from "lucide-react";

// Type Definitions
type CategoryId = "all" | "web" | "app" | "video" | "marketing" | "ai-agent";

type Project = {
  img: string;
  title: string;
  description: string;
  category: Exclude<CategoryId, "all">;
  label: string;
  link?: string;
  video?: string;
};

// Categories Configuration
const categories: { id: CategoryId; label: string; icon: typeof Globe }[] = [
  { id: "all", label: "All Work", icon: ArrowUpRight },
  { id: "web", label: "Web Projects", icon: Globe },
  { id: "app", label: "App Projects", icon: Smartphone },
  { id: "video", label: "Video Editing", icon: Film },
  { id: "marketing", label: "Digital Marketing", icon: Megaphone },
  { id: "ai-agent", label: "AI Agents", icon: Bot },
];

// Projects Data
const projects: Project[] = [
  // Web Projects
  {
    img: "/w01.jpg",
    title: "Creative Landing Page",
    description:
      "Modern responsive website built with Next.js featuring smooth animations, mobile-first design, and conversion-focused layout for maximum results.",
    category: "web",
    label: "Web Design",
    link: "https://e-com-w-git-main-huzaifa-888s-projects.vercel.app",
  },
  {
    img: "/w4.jpg",
    title: "Business Website",
    description:
      "Hide phone numbers on WhatsApp Web and block sending numbers in messages — simple, automatic privacy protection.",
    category: "web",
    label: "Corporate",
    link: "https://piz-4ltm9cv9d-quranhosting60-bots-projects.vercel.app",
  },
  {
    img: "/im.jpg",   // pehle "/P1.jpg" tha
    title: "Whtasapp Privacy Tool",
    description:
      "Full-featured online store with product listings, cart functionality, and a streamlined checkout experience built for real-world sales.",
    category: "web",
    label: "E-Commerce",
    link: "https://drive.google.com/file/d/10mtj9WMwoWyfIgLAyhyUFlLfN3MLNy1G/view?usp=drive_link",
  },
  {
    img: "/web.jpg",   // pehle "/w2s.png" tha
    title: "Roofing & Shades Business Website",
    description:
      "Professional business website for a roofing tiles and shades company, built to showcase services and support Google Ads campaigns with a custom domain and business email setup.",
    category: "web",
    label: "Business Website",
    link: "https://www.qameedomuzalat.store",
  },

  // App Projects
  {
    img: "/a01.jpg",
    title: "Task Manager App",
    description:
      "Cross-platform app with cloud sync, real-time collaboration, and smart reminders designed to keep teams organized and on track.",
    category: "app",
    label: "Mobile App",
    video: "https://youtube.com/shorts/s1cPZ9GIxjM?si=syjveFvbzmabf3iv",
  },
  {
    img: "/a02.jpg",
    title: "Productivity App",
    description:
      "Daily habit and goal tracking with analytics dashboard, streak system, and weekly reports for highly focused individuals.",
    category: "app",
    label: "Productivity",
    video: "https://youtube.com/shorts/D558TdNEfX8?si=ULWLv8HrIrmuKPj4",
  },
  {
    img: "/desk.jpg",
    title: "Inventory Desktop App",
    description:
      "Robust stock management system with barcode scanning, low-stock alerts, and detailed reporting for small to mid-size businesses.",
    category: "app",
    label: "Desktop App",
    video: "https://youtu.be/rKAReNowzZ4?si=LoMkM3KaQ8hJ5dQw",
  },

  // Video Projects
  {
    img: "/v1.jpg",
    title: "YouTube Editing",
    description:
      "Professional long-form edit with dynamic cuts, motion graphics, color grading, and pacing optimized for viewer retention.",
    category: "video",
    label: "YouTube",
    video:
      "https://drive.google.com/file/d/1XbmzQOJQTxfOUjqUpRniVTlltXRkebO7/view?usp=drivesdk",
  },
  {
    img: "/v2.jpg",
    title: "Reels Editing",
    description:
      "High-energy short-form reels crafted for virality with fast cuts, trending audio sync, and hook-first storytelling structure.",
    category: "video",
    label: "Short Form",
    video:
      "https://drive.google.com/file/d/1h6SU3dp864Qi4u3aOb4aTciG4AhzSWSn/view?usp=drivesdk",
  },
  {
    img: "/v3.jpg",
    title: "Podcast Editing",
    description:
      "Podcast-to-shorts conversion pipeline — clipping highlights, adding captions, and formatting for all major short-form platforms.",
    category: "video",
    label: "Podcast",
    video:
      "https://drive.google.com/file/d/1js1Xt9hKFGYFH3MEd8YCI1hshfv3UGKJ/view?usp=drivesdk",
  },
  {
    img: "/v4.jpg",
    title: "Nature Editing",
    description:
      "Cinematic documentary edit with LUT-based color grading, ambient sound design, and seamless transitions for premium storytelling.",
    category: "video",
    label: "Cinematic",
    video:
      "https://drive.google.com/file/d/1CL4yO-VGHVri84RodMrEN6wKcr0FPiaO/view?usp=drivesdk",
  },

  // Marketing Projects
  {
    img: "/D1.jpeg",
    title: "Ad Campaign",
    description:
      "End-to-end Meta & Google Ads management — audience targeting, creative A/B testing, and budget optimization to drive measurable ROI.",
    category: "marketing",
    label: "Paid Ads",
  },
  {
    img: "/d2.jpeg",
    title: "Social Media Growth",
    description:
      "Data-driven brand scaling strategy covering content planning, engagement frameworks, and platform-specific growth playbooks.",
    category: "marketing",
    label: "Social Media",
  },

  // AI Agent Projects
  {
    img: "/A1.jpg",
    title: "Auto Email-Marketing AI-Agent",
    description:
      "An AI agent that writes, personalizes, and sends high-converting email campaigns automatically — no manual copywriting or scheduling needed.",
    category: "ai-agent",
    label: "AI Agent",
    video: "https://drive.google.com/file/d/10yDZPCfYjVaJJkmV18W-kyfJgT2qb5yH/view?usp=drive_link",
  },
  {
    img: "/A2.jpg",
    title: "Auto Posting on Instagram AI-Agent",
    description:
      "An AI agent that auto-generates captions and posts to Instagram on schedule — no manual posting required.",
    category: "ai-agent",
    label: "AI Agent",
    video: "https://drive.google.com/file/d/1_UgjKYJ7jJy3_Wqjrhd5TkgS406dVjLE/view?usp=drive_link",
  },
  {
    img: "/A3.jpg",
    title: "WhatsApp Customer Support AI Agent",
    description:
      "An AI agent that auto-replies and follows up with customers on WhatsApp — so no chat ever goes unanswered.",
    category: "ai-agent",
    label: "AI Agent",
    video: "https://drive.google.com/file/d/1Z4-mUiMFEbxazpBweTYzX8K1vKHW890j/view?usp=drive_link",
  },
  {
    img: "/A4.jpg",
    title: "Hospital Appointment AI Agent",
    description:
      "An AI agent that books, reschedules, and cancels hospital appointments automatically — no front-desk staff needed.",
    category: "ai-agent",
    label: "AI Agent",
    video: "https://drive.google.com/file/d/19anIvUTgA6yHEB2aNpD1rTXbHWLR5Kaw/view?usp=drive_link",
  },

];

// Styles with Animations
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Figtree:wght@300;400;500;600&display=swap');

  :root {
    --pf-magenta: #f72585;
    --pf-dark: var(--bg);
    --pf-card: #0d0d0d;
    --pf-border: rgba(255, 255, 255, 0.08);
    --pf-text: #f2f2f2;
    --pf-muted: #8a8a8a;
  }

  /* Animations */
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  * {
    box-sizing: border-box;
  }

  .pf-root {
    background: var(--pf-dark);
    min-height: 100vh;
    font-family: 'Figtree', sans-serif;
    color: var(--pf-text);
  }

  /* Header Section */
  .pf-header {
    padding: 72px 48px 40px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .pf-eyebrow {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--pf-magenta);
    margin-bottom: 16px;
    animation: fadeInDown 0.6s ease-out;
  }

  .pf-header h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(32px, 6vw, 58px);
    font-weight: 700;
    line-height: 1.08;
    color: #fff;
    margin-bottom: 18px;
    animation: fadeInDown 0.8s ease-out 0.2s both;
  }

  .pf-header h1 em {
    color: var(--pf-magenta);
    font-style: normal;
    animation: float 3s ease-in-out infinite;
  }

  .pf-header p {
    font-size: 16px;
    color: var(--pf-muted);
    font-weight: 300;
    max-width: 620px;
    line-height: 1.7;
    animation: fadeInUp 0.8s ease-out 0.4s both;
  }

  /* Filter Chips */
  .pf-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0 48px 40px;
    max-width: 1200px;
    margin: 0 auto;
    animation: fadeInUp 0.8s ease-out 0.6s both;
  }

  .pf-chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    border-radius: 999px;
    border: 1px solid var(--pf-border);
    background: transparent;
    color: var(--pf-text);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    animation: slideInLeft 0.5s ease-out backwards;
  }

  .pf-chip:nth-child(1) { animation-delay: 0.65s; }
  .pf-chip:nth-child(2) { animation-delay: 0.75s; }
  .pf-chip:nth-child(3) { animation-delay: 0.85s; }
  .pf-chip:nth-child(4) { animation-delay: 0.95s; }
  .pf-chip:nth-child(5) { animation-delay: 1.05s; }
  .pf-chip:nth-child(6) { animation-delay: 1.15s; }

  .pf-chip:hover {
    border-color: rgba(247, 37, 133, 0.5);
    transform: translateY(-2px);
  }

  .pf-chip.active {
    background: var(--pf-magenta);
    border-color: var(--pf-magenta);
    color: #000;
    box-shadow: 0 4px 15px rgba(247, 37, 133, 0.3);
  }

  /* Grid & Cards */
  .pf-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
    gap: 22px;
    padding: 0 48px 80px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .pf-card {
    position: relative;
    overflow: hidden;
    border-radius: 18px;
    border: 1px solid var(--pf-border);
    background: var(--pf-card);
    transition: transform 0.3s ease, border-color 0.3s ease;
    animation: scaleIn 0.5s ease-out backwards;
  }

  .pf-card:nth-child(1) { animation-delay: 1.2s; }
  .pf-card:nth-child(2) { animation-delay: 1.3s; }
  .pf-card:nth-child(3) { animation-delay: 1.4s; }
  .pf-card:nth-child(4) { animation-delay: 1.5s; }
  .pf-card:nth-child(5) { animation-delay: 1.6s; }
  .pf-card:nth-child(6) { animation-delay: 1.7s; }
  .pf-card:nth-child(7) { animation-delay: 1.8s; }
  .pf-card:nth-child(8) { animation-delay: 1.9s; }
  .pf-card:nth-child(9) { animation-delay: 2.0s; }
  .pf-card:nth-child(10) { animation-delay: 2.1s; }
  .pf-card:nth-child(11) { animation-delay: 2.2s; }
  .pf-card:nth-child(12) { animation-delay: 2.3s; }

  .pf-card:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 255, 255, 0.18);
    box-shadow: 0 20px 40px rgba(247, 37, 133, 0.15);
  }

  /* Thumbnail */
  .pf-thumb {
    position: relative;
    width: 100%;
    aspect-ratio: 16/10;
    overflow: hidden;
    background: #111;
  }

  .pf-thumb img {
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .pf-card:hover .pf-thumb img {
    transform: scale(1.06);
  }

  .pf-thumb::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(247, 37, 133, 0.18), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .pf-card:hover .pf-thumb::after {
    opacity: 1;
  }

  .pf-icon-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    width: 32px;
    height: 32px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(247, 37, 133, 0.18);
    color: var(--pf-magenta);
    z-index: 1;
  }

  /* Card Body */
  .pf-body {
    padding: 22px 24px 26px;
    animation: fadeInUp 0.6s ease-out 0.3s backwards;
  }

  .pf-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--pf-magenta);
    opacity: 0;
    animation: fadeInUp 0.4s ease-out 0.4s forwards;
  }

  .pf-title {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    margin: 8px 0;
    line-height: 1.3;
    opacity: 0;
    animation: fadeInUp 0.4s ease-out 0.5s forwards;
  }

  .pf-desc {
    font-size: 13.5px;
    color: var(--pf-muted);
    line-height: 1.7;
    font-weight: 300;
    opacity: 0;
    animation: fadeInUp 0.4s ease-out 0.6s forwards;
  }

  /* Action Buttons */
  .pf-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 18px;
    opacity: 0;
    animation: fadeInUp 0.4s ease-out 0.7s forwards;
  }

  .pf-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 9px 16px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    text-decoration: none;
    background: var(--pf-magenta);
    color: #000;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  }

  .pf-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(247, 37, 133, 0.5);
  }

  .pf-btn:active {
    transform: translateY(-1px);
  }

  .pf-btn-outline {
    background: transparent;
    border: 1px solid var(--pf-border);
    color: var(--pf-muted);
  }

  .pf-btn-outline:hover {
    border-color: rgba(247, 37, 133, 0.5);
    color: var(--pf-magenta);
  }

  /* Empty State */
  .pf-empty {
    text-align: center;
    padding: 60px 0;
    color: var(--pf-muted);
    animation: fadeInUp 0.6s ease-out 0.4s both;
    font-size: 18px;
    font-weight: 500;
  }

  /* Loading Animation */
  .pf-loading {
    opacity: 0.5;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .pf-header,
    .pf-filters,
    .pf-grid {
      padding-left: 24px;
      padding-right: 24px;
    }

    .pf-header h1 {
      font-size: clamp(24px, 5vw, 40px);
    }

    .pf-grid {
      grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
      gap: 16px;
    }

    .pf-card:hover {
      transform: translateY(-4px);
    }
  }

  @media (max-width: 480px) {
    .pf-header {
      padding: 40px 16px 24px;
    }

    .pf-grid {
      grid-template-columns: 1fr;
      gap: 16px;
      padding: 0 16px 60px;
    }

    .pf-filters {
      padding: 0 16px 24px;
      gap: 8px;
    }

    .pf-chip {
      font-size: 12px;
      padding: 8px 14px;
    }
  }
`;

// Main Component
export default function Projects() {
  const [active, setActive] = useState<CategoryId>("all");
  const [isLoading, setIsLoading] = useState(true);

  // Set loading to false after component mounts
  useEffect(() => {
    setIsLoading(false);
  }, []);

  // Filter projects based on selected category
  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <style>{styles}</style>

      <div className="pf-root">
        {/* Header */}
        <div className="pf-header">
          <div className="pf-eyebrow">Portfolio · 2025</div>
          <h1>
            Selected <em>works</em> across web, app & media.
          </h1>
          <p>
            A curated showcase of web, app, video editing, digital marketing,
            and AI agent projects delivered with precision.
          </p>
        </div>

        {/* Category Filters */}
        <div className="pf-filters">
          {categories.map((c) => {
            const Icon = c.icon;
            const isActive = active === c.id;

            return (
              <button
                key={c.id}
                className={`pf-chip ${isActive ? "active" : ""}`}
                onClick={() => setActive(c.id)}
              >
                <Icon size={16} />
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="pf-grid">
          {filtered.map((p) => {
            const cat = categories.find((c) => c.id === p.category)!;
            const Icon = cat.icon;
            const hasLink = Boolean(p.link || p.video);

            return (
              <div className="pf-card" key={p.title}>
                {/* Project Thumbnail */}
                <div className="pf-thumb">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                  <span className="pf-icon-badge">
                    <Icon size={16} />
                  </span>
                </div>

                {/* Project Details */}
                <div className="pf-body">
                  <span className="pf-label">{p.label}</span>
                  <h3 className="pf-title">{p.title}</h3>
                  <p className="pf-desc">{p.description}</p>

                  {/* Action Buttons */}
                  <div className="pf-actions">
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pf-btn"
                      >
                        <ExternalLink size={13} /> Visit Live
                      </a>
                    )}
                    {p.video && (
                      <a
                        href={p.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pf-btn"
                      >
                        <Play size={13} /> Watch Demo
                      </a>
                    )}
                    {!hasLink && (
                      <span className="pf-btn pf-btn-outline">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <p className="pf-empty">No projects yet in this category.</p>
        )}
      </div>
    </>
  );
}