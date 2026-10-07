import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import BookRoom from "./pages/BookRoom";
import MyBooking from "./pages/MyBooking";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/book/:id" element={<BookRoom />} />
        <Route path="/my-bookings" element={<MyBooking />} />
      </Routes>
    </>
  );
}

export default App;