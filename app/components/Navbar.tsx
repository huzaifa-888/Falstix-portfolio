"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({
  activePage,
  onNavigate,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (page: string) => {
    setMenuOpen(false);
    onNavigate(page);
  };

  const pages = ["home", "services", "team", "projects", "about"];

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <button
          className="nav-logo"
          onClick={() => navigate("home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
         <Image
  src="/GL.png"
  alt="Falestix Logo"
  width={220}
  height={150}
  className="nav-logo-img"
  style={{
    objectFit: "contain",
    display: "block",
    height: "clamp(36px, 6vw, 52px)",
    width: "auto",
    maxWidth: "150px",
  }}
  priority
/>
        </button>

        <ul className="nav-links">
          {pages.map((p) => (
            <li key={p}>
              <a
                className={activePage === p ? "active" : ""}
                onClick={() => navigate(p)}
                style={{ cursor: "pointer" }}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </a>
            </li>
          ))}

          <li>
            <a
              className="cta-btn"
              onClick={() => navigate("contact")}
              style={{ cursor: "pointer" }}
            >
              Contact Us
            </a>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {pages.map((p) => (
          <a
            key={p}
            onClick={() => navigate(p)}
            style={{ cursor: "pointer" }}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </a>
        ))}

        <a
          onClick={() => navigate("contact")}
          style={{ cursor: "pointer" }}
        >
          Contact Us
        </a>
      </div>
    </>
  );
}