import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import rooms from "../data/rooms";
import BookingForm from "../components/BookingForm";

function BookRoom() {

  const { id } = useParams();

  const navigate = useNavigate();

  const room = rooms.find(
    (room) => room.id === Number(id)
  );


  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    date: "",
    time: "",
    students: 1
  });


  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    const booking = {
      id: Date.now(),
      roomName: room.name,
      roomLocation: room.location,
      roomType: room.type,
      ...formData
    };


    const oldBookings =
      JSON.parse(
        localStorage.getItem("bookings")
      ) || [];


    localStorage.setItem(
      "bookings",
      JSON.stringify([
        ...oldBookings,
        booking
      ])
    );


    alert("🎉 Booking confirmed successfully!");

    navigate("/my-bookings");

  };


  if (!room) {

    return (
      <div className="error-page">

        <div className="error-icon">
          😕
        </div>

        <h1>Room Not Found</h1>

        <p>
          Sorry, this study room does not exist.
        </p>

      </div>
    );

  }


  return (

    <div className="booking-page">

      <div className="booking-wrapper">

        <div className="booking-intro">

          <span className="small-title">
            RESERVE YOUR SPACE
          </span>

          <h1>
            Book {room.name}
          </h1>

          <p>
            Complete the form below to reserve
            your study room.
          </p>

        </div>


        <div className="booking-layout">

          <div className="selected-room">

            <div className="selected-room-image">
              🏠
            </div>

            <div className="selected-room-content">

              <span className="available-badge">
                ● Available
              </span>

              <h2>{room.name}</h2>

              <p>{room.type}</p>

              <div className="selected-info">
                <span>
                  📍 {room.location}
                </span>

                <span>
                  👥 Up to {room.capacity} students
                </span>
              </div>

            </div>

          </div>


          <div className="booking-form-card">

            <div className="form-heading">

              <h2>Booking Details</h2>

              <p>
                Enter your details below
              </p>

            </div>


            <BookingForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              room={room}
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default BookRoom;