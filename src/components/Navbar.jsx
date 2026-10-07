import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        <span className="logo-icon">📚</span>
        <span>StudySpace</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/my-bookings">My Bookings</Link>
      </div>

    </nav>
  );
}

export default Navbar;