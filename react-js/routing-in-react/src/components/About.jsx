import "./About.css";

function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1 className="about-title">Crafting the Future</h1>
        <p className="about-subtitle">
          We are a team of visionaries, designers, and engineers dedicated to
          redefining the way you experience lifestyle products.
        </p>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-image-wrapper">
          <img
            src="/about-team.png"
            alt="Our Team"
            className="story-image"
          />
        </div>
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            Founded in 2024, we started with a simple mission: to bridge the gap
            between premium design and everyday utility. What began as a small
            studio has chosen quality over quantity at every step.
          </p>
          <p>
            We believe that the objects you surround yourself with shape your
            mindset. That's why every product in our collection is rigorously
            tested and thoughtfully curated to ensure it brings both joy and
            efficiency to your life.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-grid">
        <div className="stat-card">
          <span className="stat-number">10k+</span>
          <span className="stat-label">Happy Customers</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">50+</span>
          <span className="stat-label">Global Brands</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">24/7</span>
          <span className="stat-label">Support</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">2yr</span>
          <span className="stat-label">Warranty</span>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2 className="section-title">Meet the Visionaries</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">👑</div>
            <h3 className="team-name">Alex Morgan</h3>
            <p className="team-role">CEO & Founder</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">🎨</div>
            <h3 className="team-name">Sarah Chen</h3>
            <p className="team-role">Head of Design</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">⚙️</div>
            <h3 className="team-name">Marcus Ross</h3>
            <p className="team-role">Lead Engineer</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">🚀</div>
            <h3 className="team-name">Elena Vega</h3>
            <p className="team-role">Product Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
