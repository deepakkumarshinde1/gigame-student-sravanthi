import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products");
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Future of Lifestyle</h1>
          <p className="hero-subtitle">
            Discover a curated collection of premium gadgets, minimalist decor,
            and smart essentials designed to elevate your everyday.
          </p>
          <button className="cta-button" onClick={handleShopNow}>
            Explore Collection
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3 className="feature-title">Premium Quality</h3>
            <p className="feature-desc">
              Curated products from top-tier brands ensuring durability and style.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <div className="feature-title">Fast Shipping</div>
            <p className="feature-desc">
              Express delivery worldwide with real-time tracking on all orders.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <div className="feature-title">Secure Warranty</div>
            <p className="feature-desc">
              2-year comprehensive warranty on all electronics and premium goods.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Trending Categories</h2>
        <div className="categories-grid">
          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
              alt="Audio"
              className="category-image"
            />
            <div className="category-overlay">
              <h3 className="category-name">Premium Audio</h3>
              <a href="/category/audio" className="category-link">
                Shop Audio &rarr;
              </a>
            </div>
          </div>
          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
              alt="Workspace"
              className="category-image"
            />
            <div className="category-overlay">
              <h3 className="category-name">Workspace</h3>
              <a href="/category/workspace" className="category-link">
                Shop Workspace &rarr;
              </a>
            </div>
          </div>
          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80"
              alt="Lifestyle"
              className="category-image"
            />
            <div className="category-overlay">
              <h3 className="category-name">Lifestyle</h3>
              <a href="/category/lifestyle" className="category-link">
                Shop Lifestyle &rarr;
              </a>
            </div>
          </div>
          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&w=800&q=80"
              alt="Smart Home"
              className="category-image"
            />
            <div className="category-overlay">
              <h3 className="category-name">Smart Home</h3>
              <a href="/category/smart-home" className="category-link">
                Shop Smart Home &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Join Our Community</h2>
          <p>Subscribe for exclusive drops, early access, and 10% off your first order.</p>
          <div className="newsletter-input-group">
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
