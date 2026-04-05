import "../css/About.css";

const badges = [
  { image: "images/evidence.png", label: "Evidence Based" },
  { image: "images/habits.png", label: "Suitable for habits" },
  { image: "images/inclusive.png", label: "Inclusive for all bodies" },
  { image: "images/privacy.png", label: "Privacy First" },
];

const About = () => {
  return (
    <main id="about">
      <section className="about-hero">
        <h1>About Us</h1>
      </section>

      <section className="about-mission">
        <div className="mission-text">
          <img src="/react-frontend-spring2026/images/aboutme.png" alt="Mission" className="mission-img" />
        </div>

        <div className="about-badges">
          {badges.map((b) => (
            <div className="badge" key={b.label}>
              <img src={b.image} alt={b.label} />
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-goals">
        <h2>Goals</h2>
        <p>
          Your goals. Your pace. Whether you&apos;re just starting out, or are
          trying to feel better day-to-day, set your goals from a three weekly
          plan. When ready, you&apos;ll feel as good as you were before.
        </p>
      </section>
    </main>
  );
};

export default About;
