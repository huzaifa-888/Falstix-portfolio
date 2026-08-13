"use client";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pages = [
    { key: "home", label: "Home" },
    { key: "services", label: "Services" },
    { key: "team", label: "Team" },
    { key: "projects", label: "Projects" },
    { key: "about", label: "About Us" },
    { key: "contact", label: "Contact" },
  ];

  const services = [
    "App Development",
    "Web Development",
    "Video Editing",
    "Flutter Apps",
    "WordPress",
  ];

  // WhatsApp Button Handler
  const whatsappNumber = "+447988575388"; // Falestix UK Number
  const whatsappMessage = "Hello Falestix! I'd like to inquire about your services.";
  
  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* WhatsApp Button Styles - Sab CSS Yahan */}
      <style>{`
        .whatsapp-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          background-color: var(--pink);
          color: white;
          border: none;
          border-radius: 50%;
          font-size: 30px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 999;
        }

        .whatsapp-button:hover {
          background-color: #25a244;
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        }

        .whatsapp-button:active {
          transform: scale(0.95);
        }

        @media (max-width: 768px) {
          .whatsapp-button {
            bottom: 20px;
            right: 20px;
            width: 55px;
            height: 55px;
            font-size: 28px;
          }
        }

        @media (max-width: 480px) {
          .whatsapp-button {
            bottom: 15px;
            right: 15px;
            width: 50px;
            height: 50px;
            font-size: 24px;
          }
        }
      `}</style>

      {/* WhatsApp Floating Button - Har Page Par Dikhayga */}
      <button
        className="whatsapp-button"
        onClick={openWhatsApp}
        title="Chat with us on WhatsApp"
        aria-label="Open WhatsApp chat"
      >
        <i className="fab fa-whatsapp"></i>
      </button>

      <footer>
        <div className="footer-inner">
          {/* Brand */}
          <div className="footer-brand">
            <div className="nav-logo" style={{ fontSize: "1.4rem" }}>
              Fale<span style={{ color: "var(--pink)" }}>stix</span>
            </div>
            <p>A creative and technology-driven studio specializing in modern digital experiences.</p>
            <div className="footer-socials">
              {[
                ["fab fa-facebook-f", "#"],
                ["fab fa-instagram", "#"],
                ["fab fa-x-twitter", "#"],
                ["fab fa-youtube", "#"],
                ["fab fa-linkedin-in", "#"],
              ].map(([icon, href]) => (
                <a key={icon} href={href} className="social-icon" target="_blank" rel="noreferrer">
                  <i className={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div className="footer-col">
            <h4>Pages</h4>
            <ul>
              {pages.map(({ key, label }) => (
                <li key={key}>
                  <a
                    onClick={() => handleNav(key)}
                    style={{ cursor: "pointer" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s}>
                  <a
                    onClick={() => handleNav("services")}
                    style={{ cursor: "pointer" }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 <span>Falestix</span>. All rights reserved.</p>
          <p>Built with <span>♥</span> in United Kingdom</p>
        </div>
      </footer>
    </>
  );
}