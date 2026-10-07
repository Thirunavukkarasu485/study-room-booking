function BookingForm({
  formData,
  handleChange,
  handleSubmit,
  room
}) {

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
    >

      <div className="form-row">

        <div className="form-group">

          <label>Student Name</label>

          <input
            type="text"
            name="studentName"
            placeholder="Enter your name"
            value={formData.studentName}
            onChange={handleChange}
            required
          />

        </div>


        <div className="form-group">

          <label>Email Address</label>

          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

        </div>

      </div>


      <div className="form-row">

        <div className="form-group">

          <label>Booking Date</label>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

        </div>


        <div className="form-group">

          <label>Booking Time</label>

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

        </div>

      </div>


      <div className="form-group">

        <label>Number of Students</label>

        <input
          type="number"
          name="students"
          min="1"
          max={room.capacity}
          value={formData.students}
          onChange={handleChange}
          required
        />

        <small>
          Maximum capacity: {room.capacity} students
        </small>

      </div>


      <button
        type="submit"
        className="confirm-button"
      >
        Confirm Booking
        <span>✓</span>
      </button>

    </form>
  );
}

export default BookingForm;