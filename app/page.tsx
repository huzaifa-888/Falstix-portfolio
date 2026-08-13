"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ClientReviews from "./components/ClientReviews";

const SECTION_IDS = ["home", "services", "team", "projects", "about", "reviews", "contact"];

export default function Home() {
  const [activePage, setActivePage] = useState("home");
  const isNavigatingRef = useRef(false);

  // Instantly jump to the requested section on nav click — no scrolling
  // through every section in between. (Normal manual scrolling elsewhere
  // on the page still uses the smooth `html { scroll-behavior: smooth }`.)
  const navigate = useCallback((page: string) => {
    const el = document.getElementById(page);
    if (!el) return;

    isNavigatingRef.current = true;
    setActivePage(page);
    el.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });

    // Release the "manual navigation" lock right after the jump.
    window.setTimeout(() => {
      isNavigatingRef.current = false;
    }, 150);
  }, []);

  // Reveal-on-scroll animations.
  // IMPORTANT: this used to run on every raw "scroll" event and re-query +
  // measure every ".reveal" element on the page (getBoundingClientRect forces
  // a synchronous layout reflow). On mobile, scroll fires dozens of times per
  // second, so that was re-measuring the whole page dozens of times a second
  // and freezing the scroll. IntersectionObserver does the same job without
  // blocking the main thread or forcing layout on every scroll tick.
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("shown");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Keep the navbar's active link in sync with whichever section is on screen.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        if (isNavigatingRef.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActivePage(visible.target.id);
        }
      },
      { rootMargin: "-72px 0px -55% 0px", threshold: [0.1, 0.25, 0.5, 0.75] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar activePage={activePage} onNavigate={navigate} />

      <main>
        <div id="home">
          <Hero onNavigate={navigate} />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="team">
          <Team />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="reviews">
          <ClientReviews />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer onNavigate={navigate} />
    </>
  );
}