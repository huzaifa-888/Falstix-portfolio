import Image from "next/image";

export default function About() {
  return (
    <section className="page-section">
      <div className="section-wrap">
        <div className="reveal">
          <div className="section-tag">Who We Are</div>

          <h2 className="section-title">
            About <span>Falestix</span>
          </h2>

          <p className="section-subtitle">
            A creative and technology-driven company building modern digital
            solutions.
          </p>
        </div>

        <div className="about-layout">
          {/* Left Side */}
          <div>
            <div className="about-block reveal">
              <div className="about-block-title">
                <i className="fas fa-info-circle" /> Who We Are
              </div>

              <p>
                Falestix is a creative and technology-driven company
                specializing in building modern websites, mobile apps, and smart
                digital solutions. Our mission is to provide reliable and
                innovative IT services that help businesses grow and reach their
                full potential.
              </p>
            </div>

            <div className="about-block reveal">
              <div className="about-block-title">
                <i className="fas fa-eye" /> Our Vision
              </div>

              <p>
                At Falestix, we envision a world where businesses of all sizes
                can access smart technology solutions. We aim to empower brands
                by blending creativity with innovation and delivering quality at
                every step.
              </p>
            </div>

            <div className="about-block reveal">
              <div className="about-block-title">
                <i className="fas fa-tools" /> What We Do
              </div>

              <ul className="about-list">
                {[
                  "Web Development (Static & Dynamic)",
                  "Mobile App Development (Android & iOS)",
                  "Custom Software Solutions",
                  "E-Commerce Platforms",
                  "AI Chatbots & Smart Tools",
                  "UI/UX Design Services",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <div className="about-block reveal">
              <div className="about-block-title">
                <i className="fas fa-address-card" /> Contact Info
              </div>

              <div className="contact-row">
                <i
                  className="fas fa-envelope"
                  style={{ color: "var(--pink)", width: 18 }}
                />
                Falestix25@gmail.com
              </div>

              <div className="contact-row">
                <i
                  className="fas fa-map-marker-alt"
                  style={{ color: "var(--pink)", width: 18 }}
                />
                71-75 Shelton Street Covent Garden London United Kingdom WC2H 9JQ
              </div>

              <div className="contact-row">
                <i
                  className="fas fa-globe"
                  style={{ color: "var(--pink)", width: 18 }}
                />
                www.falestix.site
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}