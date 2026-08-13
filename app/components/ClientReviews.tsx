const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Bloom Retail Co.",
    initial: "S",
    rating: 5,
    text: "The team delivered our e-commerce site ahead of schedule and it looks better than anything we imagined. Sales went up within the first month of launch.",
  },
  {
    name: "David Chen",
    role: "CEO, Nova Fitness",
    initial: "D",
    rating: 5,
    text: "Our mobile app finally feels premium. Communication was clear the whole way through, and every revision was handled quickly without any fuss.",
  },
  {
    name: "Ayesha Raza",
    role: "Marketing Head, Zenith Foods",
    initial: "A",
    rating: 5,
    text: "Our ad campaigns had never performed this well before. ROAS more than doubled and the reporting made it easy to see exactly where budget was working.",
  },
  {
    name: "Michael Torres",
    role: "Owner, Torres Clinic",
    initial: "M",
    rating: 5,
    text: "The AI booking assistant cut our front-desk workload in half. Patients love how fast they can schedule appointments now, even outside office hours.",
  },
  {
    name: "Lubna Farooq",
    role: "Founder, Studio Lumen",
    initial: "L",
    rating: 4,
    text: "Great attention to detail on our brand video edits. A couple of rounds of feedback were needed, but the final result was exactly what we wanted.",
  },
  {
    name: "James Whitfield",
    role: "Director, Whitfield Logistics",
    initial: "J",
    rating: 5,
    text: "Professional from start to finish. The dashboard they built gives us real-time visibility we never had before, and support after launch has been excellent.",
  },
];

function Star({ filled }: { filled: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "#f72585" : "none"} stroke="#f72585" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.63 22 9.24 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.24 8.91 8.63 12 2" />
    </svg>
  );
}

export default function ClientReviews() {
  return (
    <section className="page-section">
      <div className="section-wrap">
        <div className="reveal">
          <div className="section-tag">Testimonials</div>
          <h2 className="section-title">
            What Our <span>Clients</span> Say
          </h2>
          <p className="section-subtitle">
            Real feedback from businesses we&apos;ve helped build, launch, and grow.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((r) => (
            <div key={r.name} className="review-card reveal">
              <div className="review-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} filled={i < r.rating} />
                ))}
              </div>

              <p className="review-text">&ldquo;{r.text}&rdquo;</p>

              <div className="review-person">
                <div className="review-avatar">{r.initial}</div>
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-role">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .page-section {
          background: var(--bg);
          padding: 88px 48px;
          color: #fff;
          font-family: 'Figtree', sans-serif;
        }
        .section-wrap {
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #f72585;
          margin-bottom: 14px;
        }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
        }
        .section-title span {
          color: #f72585;
        }
        .section-subtitle {
          color: #9a9a9a;
          font-size: 15px;
          font-weight: 300;
          max-width: 560px;
          line-height: 1.7;
          margin-bottom: 48px;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }

        .review-card {
          background: var(--card);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 28px 26px;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }
        .review-card:hover {
          transform: translateY(-4px);
          border-color: rgba(247,37,133,0.4);
        }

        .review-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 16px;
        }

        .review-text {
          font-size: 14.5px;
          line-height: 1.75;
          color: #d8d8d8;
          font-weight: 300;
          margin-bottom: 24px;
          min-height: 110px;
        }

        .review-person {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .review-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(247,37,133,0.15);
          color: #f72585;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
          flex-shrink: 0;
        }

        .review-name {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
        }
        .review-role {
          font-size: 12.5px;
          color: #8a8a8a;
          margin-top: 2px;
        }

        @media (max-width: 900px) {
          .reviews-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .page-section {
            padding: 64px 24px;
          }
          .reviews-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}