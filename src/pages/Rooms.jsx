import { useState } from "react";

import rooms from "../data/rooms";
import RoomCard from "../components/Roomcard";

function Rooms() {

  const [search, setSearch] = useState("");

  const filteredRooms = rooms.filter((room) => {

    const value = search.toLowerCase();

    return (
      room.name.toLowerCase().includes(value) ||
      room.type.toLowerCase().includes(value) ||
      room.location.toLowerCase().includes(value)
    );

  });

  return (
    <div className="rooms-page">

      <div className="rooms-header">

        <div>
          <span className="small-title">
            FIND YOUR SPACE
          </span>

          <h1>Choose Your Study Room</h1>

          <p>
            Find the perfect environment for
            your next study session.
          </p>
        </div>

      </div>


      <div className="search-area">

        <div className="search-icon">
          🔍
        </div>

        <input
          type="text"
          placeholder="Search room, type or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>


      <div className="room-count">
        {filteredRooms.length} rooms available
      </div>


      {filteredRooms.length > 0 ? (

        <div className="room-grid">

          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
            />
          ))}

        </div>

      ) : (

        <div className="no-results">

          <div>🔍</div>

          <h2>No rooms found</h2>

          <p>
            Try a different room name,
            location or study type.
          </p>

        </div>

      )}

    </div>
  );
}

export default Rooms;