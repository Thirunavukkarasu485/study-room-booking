import { Link } from "react-router-dom";

function RoomCard({ room }) {

  return (
    <div className="room-card">

      <div className="room-image">

        <div className="room-number">
          0{room.id}
        </div>

        <div className="room-emoji">
          🏠
        </div>

        <span className="available-badge">
          ● Available
        </span>

      </div>


      <div className="room-card-content">

        <div className="room-title-row">

          <div>
            <h2>{room.name}</h2>

            <span className="room-type">
              {room.type}
            </span>
          </div>

        </div>


        <div className="room-details">

          <div>
            <span>👥</span>
            <div>
              <small>Capacity</small>
              <strong>{room.capacity} Students</strong>
            </div>
          </div>

          <div>
            <span>📍</span>
            <div>
              <small>Location</small>
              <strong>{room.location}</strong>
            </div>
          </div>

        </div>


        <Link
          to={`/book/${room.id}`}
          className="room-button"
        >
          Book This Room
          <span>→</span>
        </Link>

      </div>

    </div>
  );
}

export default RoomCard;