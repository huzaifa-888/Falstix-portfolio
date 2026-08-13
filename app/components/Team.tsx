import Image from "next/image";

const team = [
  { img: "/sj.jpeg", name: "M. Sibgatullah", role: "App Developer", desc: "Specialist in building mobile applications using Flutter and React Native." },
  { img: "/Huzaifa.jpeg", name: "Huzaifa Kaleem", role: "Web Developer", desc: "Expert in crafting responsive and high-performance websites using React and Node.js." },
  { img: "/bs.jpeg", name: "Basit Hassan", role: "Digital Marketing", desc: "Basit Hassan is a Digital Marketing Specialist with expertise in Social Media Marketing, Paid Advertising, and Google Business Profile (GBP) Management. I help businesses increase their online visibility, generate quality leads, and grow through data-driven marketing strategies and effective digital solutions." },
  { img: "/asad.jpeg", name: "Asad", role: "Video Editor & YouTube Automation", desc: "Creative video editor specializing in cinematic edits, motion graphics, and storytelling. Expert in YouTube automation and channel growth strategies." },

  // NEW VIDEO EDITOR
  { img: "/ch.jpeg", name: "Ch.Rayan", role: "Video Editor", desc: "Podcast to Shorts specialist | Raw footage to engaging videos | Short Reels editing expert with a keen eye for storytelling and pacing." },

  { img: "/arslan.png", name: "Arslan Rehmat", role: "Marketing & Ads Specialist", desc: "Experienced in running targeted ad campaigns, managing social media marketing." },
];

export default function Team() {
  return (
    <section className="page-section">
      <div className="section-wrap">
        <div className="reveal">
          <div className="section-tag">The People</div>
          <h2 className="section-title">Meet Our <span>Team</span></h2>
          <p className="section-subtitle">Talented individuals who bring ideas to life with skill and passion.</p>
        </div>
        <div className="team-grid">
          {team.map((m) => (
            <div key={m.name} className="team-card reveal">
              <div className="team-avatar-wrap">
                <Image src={m.img} alt={m.name} width={100} height={100} style={{ borderRadius: "50%", objectFit: "cover" }} />
              </div>
              <div className="team-role">{m.role}</div>
              <div className="team-name">{m.name}</div>
              <div className="team-desc">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .team-grid {
          display: grid !important;
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 28px;
        }
        @media (max-width: 640px) {
          .team-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}