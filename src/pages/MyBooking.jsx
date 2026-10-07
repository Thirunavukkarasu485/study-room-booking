import { useState } from "react";

function MyBooking() {

  const [bookings, setBookings] = useState(
    JSON.parse(
      localStorage.getItem("bookings")
    ) || []
  );


  const cancelBooking = (id) => {

    const updatedBookings =
      bookings.filter(
        (booking) => booking.id !== id
      );


    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );


    setBookings(updatedBookings);

  };


  return (

    <div className="my-bookings-page">

      <div className="my-bookings-header">

        <span className="small-title">
          YOUR RESERVATIONS
        </span>

        <h1>My Bookings</h1>

        <p>
          Manage your upcoming study room reservations.
        </p>

      </div>


      {bookings.length === 0 ? (

        <div className="empty-bookings">

          <div className="empty-icon">
            📅
          </div>

          <h2>
            No Bookings Yet
          </h2>

          <p>
            You haven't reserved a study room yet.
          </p>

          <a
            href="/rooms"
            className="primary-button"
          >
            Find a Room →
          </a>

        </div>

      ) : (

        <div className="booking-list">

          {bookings.map((booking) => (

            <div
              className="my-booking-card"
              key={booking.id}
            >

              <div className="booking-room-icon">
                🏠
              </div>


              <div className="booking-main">

                <div className="booking-title">

                  <div>
                    <span className="booking-confirmed">
                      ✓ Confirmed
                    </span>

                    <h2>
                      {booking.roomName}
                    </h2>

                    <p>
                      {booking.roomType}
                    </p>
                  </div>

                </div>


                <div className="booking-info-grid">

                  <div>
                    <span>📅</span>
                    <div>
                      <small>Date</small>
                      <strong>{booking.date}</strong>
                    </div>
                  </div>

                  <div>
                    <span>⏰</span>
                    <div>
                      <small>Time</small>
                      <strong>{booking.time}</strong>
                    </div>
                  </div>

                  <div>
                    <span>👥</span>
                    <div>
                      <small>Students</small>
                      <strong>{booking.students}</strong>
                    </div>
                  </div>

                  <div>
                    <span>📍</span>
                    <div>
                      <small>Location</small>
                      <strong>{booking.roomLocation}</strong>
                    </div>
                  </div>

                </div>


                <button
                  className="cancel-button"
                  onClick={() =>
                    cancelBooking(booking.id)
                  }
                >
                  Cancel Booking
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default MyBooking;