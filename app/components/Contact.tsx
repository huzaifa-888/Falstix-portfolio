"use client";
import { useState } from "react";

// WhatsApp number to receive form submissions (digits only, country code, no + or spaces)
const WHATSAPP_NUMBER = "447988575388";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = () => {
    if (!name || !email || !message) { alert("Please fill in all fields."); return; }
    setSending(true);

    const text = `New message from website:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setSending(false);
      setSent(true);
      setName(""); setEmail(""); setMessage("");
    }, 1200);
  };

  const cards = [
    { icon: "fa-envelope", title: "Email", val: " Falestix25@gmail.com" },
    { icon: "fa-map-marker-alt", title: "Location", val: "71-75 Shelton Street Covent Garden London United Kingdom WC2H 9JQ" },
    { icon: "fa-clock", title: "Working Hours", val: "Mon–Fri, 9 AM – 6 PM PKT" },
    { icon: "fa-whatsapp fab", title: "WhatsApp", val: "+44 7988 575388" },
  ];

  return (
    <section className="page-section">
      <div className="section-wrap">
        <div className="reveal">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">Contact <span>Me</span></h2>
          <p className="section-subtitle">I would love to hear from you! Whether you have a question or just want to say hi.</p>
        </div>
        <div className="contact-layout">
          <div className="contact-info-block">
            {cards.map((c) => (
              <div key={c.title} className="contact-card reveal">
                <div className="contact-icon"><i className={`fas ${c.icon}`} /></div>
                <div>
                  <div className="contact-card-title">{c.title}</div>
                  <div className="contact-card-val">{c.val}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="contact-form reveal">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-input" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" placeholder="Type your message here..." value={message} onChange={e => setMessage(e.target.value)} />
            </div>
            <button className="form-submit" onClick={handleSubmit} disabled={sending}>
              {sending ? "Sending..." : "Send Message "}
            </button>
            <div className={`form-success ${sent ? "visible" : ""}`}>
              ✅ Message sent! I&apos;ll get back to you soon.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}