import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      <section className="hero">

        <div className="hero-content">

          <div className="hero-badge">
            ✨ Your perfect study space
          </div>

          <h1>
            Study Better.
            <br />
            <span>Book Smarter.</span>
          </h1>

          <p>
            Find a quiet and comfortable study room,
            reserve your space, and focus on achieving
            your academic goals.
          </p>

          <div className="hero-buttons">

            <Link
              to="/rooms"
              className="primary-button"
            >
              Explore Rooms →
            </Link>

            <Link
              to="/my-bookings"
              className="secondary-button"
            >
              My Bookings
            </Link>

          </div>

          <div className="hero-stats">

            <div>
              <strong>6+</strong>
              <span>Study Rooms</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Booking</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Easy Booking</span>
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div className="floating-card card-one">
            📖
            <span>Focus Time</span>
          </div>

          <div className="study-illustration">
            <div className="lamp">💡</div>
            <div className="desk"></div>
            <div className="laptop">💻</div>
            <div className="chair">🪑</div>
          </div>

          <div className="floating-card card-two">
            ✓ Room Available
          </div>

        </div>

      </section>

      <section className="features-section">

        <div className="section-heading">
          <span>WHY CHOOSE US</span>
          <h2>Everything you need to study better</h2>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">🔎</div>
            <h3>Find Your Room</h3>
            <p>
              Search rooms by name, location,
              or study type.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Easy Booking</h3>
            <p>
              Reserve your preferred room
              in just a few clicks.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Focus & Learn</h3>
            <p>
              Enjoy a comfortable environment
              designed for productive study.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;